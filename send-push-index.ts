// ═══════════════════════════════════════════════════════════════
//  Heftreng — Supabase Edge Function: send-push
//  Kurulum:
//    1. supabase/functions/send-push/index.ts olarak kaydet
//    2. supabase functions deploy send-push
//    3. Supabase Dashboard → Edge Functions → send-push →
//       Secrets'a FCM_SERVER_KEY ekle
// ═══════════════════════════════════════════════════════════════

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const FCM_ENDPOINT = "https://fcm.googleapis.com/fcm/send";

serve(async (req) => {
  /* CORS */
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "https://heft-reng.blogspot.com",
        "Access-Control-Allow-Headers": "authorization, content-type",
      },
    });
  }

  try {
    const { title, body, url, icon, targetUid } = await req.json();

    if (!title) {
      return new Response(JSON.stringify({ error: "title gerekli" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    /* Supabase client — service role ile push_tokens tablosunu oku */
    const sb = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    /* Token'ları çek */
    let query = sb.from("push_tokens").select("token");
    if (targetUid) {
      query = query.eq("uid", targetUid);
    }
    const { data: rows, error } = await query;
    if (error) throw new Error(error.message);
    if (!rows || rows.length === 0) {
      return new Response(JSON.stringify({ sent: 0, message: "Token bulunamadı" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const tokens = rows.map((r: any) => r.token);
    const FCM_KEY = Deno.env.get("FCM_SERVER_KEY")!;

    /* FCM'e gönder — batch (max 500) */
    const payload = {
      registration_ids: tokens.slice(0, 500),
      notification: {
        title,
        body: body || "",
        icon: icon || "https://raw.githubusercontent.com/heftreng49/depo/master/icons/icon-192.png",
        click_action: url || "https://heft-reng.blogspot.com",
      },
      data: {
        title,
        body: body || "",
        url: url || "https://heft-reng.blogspot.com",
        icon: icon || "",
      },
    };

    const fcmRes = await fetch(FCM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `key=${FCM_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const fcmData = await fcmRes.json();

    return new Response(
      JSON.stringify({ sent: tokens.length, fcm: fcmData }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://heft-reng.blogspot.com",
        },
      }
    );
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
