import { supabase } from "@/utils/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();
    console.log(data)
    const { device_id, time, portal_id, identifier_id, event, user_id, access_photo } = data;



    const { data: log, error } = await supabase
      .from('logs_facial_photo')
      .insert([
        { user_id, time, device_id,  identifier_id, event, access_photo, portal_id},
      ])
      .select()

      if(log) {identifier_id
        return NextResponse.json('log save', { status: 200});

      }
      else{
        console.log(error)
      }

  } catch (error) {
    return NextResponse.json(`log erro`, { status: 500});
  }
  return NextResponse.json('log erro', { status: 500});
}
