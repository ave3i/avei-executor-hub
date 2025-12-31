import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CheckoutRequest {
  customerEmail: string;
  orderId?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const NOWPAYMENTS_API_KEY = Deno.env.get("NOWPAYMENTS_API_KEY");
    
    if (!NOWPAYMENTS_API_KEY) {
      console.error("NOWPAYMENTS_API_KEY is not configured");
      throw new Error("Payment system not configured");
    }

    const { customerEmail, orderId } = await req.json() as CheckoutRequest;

    if (!customerEmail) {
      throw new Error("Customer email is required");
    }

    console.log("Creating NOWPayments invoice for:", customerEmail);

    const origin = req.headers.get("origin") || "https://memoria.app";

    const invoiceResponse = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "x-api-key": NOWPAYMENTS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price_amount: 6.99,
        price_currency: "usd",
        order_id: orderId || `MEMORIA-${Date.now()}`,
        order_description: "Memoria Executor - Lifetime Key",
        success_url: `${origin}/success`,
        cancel_url: `${origin}/#pricing`,
      }),
    });

    if (!invoiceResponse.ok) {
      const errorText = await invoiceResponse.text();
      console.error("NOWPayments API error:", errorText);
      throw new Error(`Payment provider error: ${invoiceResponse.status}`);
    }

    const invoiceData = await invoiceResponse.json();
    console.log("Invoice created:", invoiceData.id);

    return new Response(
      JSON.stringify({ url: invoiceData.invoice_url, invoiceId: invoiceData.id }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error creating checkout:", message);
    return new Response(
      JSON.stringify({ error: message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
