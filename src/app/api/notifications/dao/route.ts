import { supabase } from "@/utils/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();
    const { object_changes, device_id, time, values } = data;

    console.log(object_changes)


    const { data: log, error } = await supabase
      .from('logs_facial')
      .insert([
        { user_id: object_changes[0].values.user_id, time: object_changes[0].values.time, device_id:  object_changes[0].values.device_id },
      ])
      .select()

      if(log) {
        return NextResponse.json('log save', { status: 200});

      }
      else{
        console.log(error)
      }

  } catch (error) {
    return NextResponse.json('log erro', { status: 500});
  }
  return NextResponse.json('log erro', { status: 500});
}
