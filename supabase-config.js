// นำเข้า Supabase Client ผ่าน CDN สำหรับใช้งานใน Vanilla HTML/JS
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// กำหนดค่า Supabase URL และ Publishable Key ตามโปรเจกต์ของคุณ
const SUPABASE_URL = 'https://xsqmcbhzvqgssdnxhiqc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_kphdkur0dgFmfiiinCTCAg_lbEYmsZ5';

// สร้างและส่งออก Supabase Client เพื่อนำไปใช้ดึง/บันทึกข้อมูลในหน้าอื่นๆ
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
