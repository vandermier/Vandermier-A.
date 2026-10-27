// กำหนดค่า Cloudinary สำหรับโปรเจกต์ Vandermire A.
const CLOUD_NAME = 'bbyhhmnr';[span_2](start_span)[span_2](end_span)
const UPLOAD_PRESET = 'Vandermire';[span_3](start_span)[span_3](end_span) // ใช้แบบ Unsigned ที่คุณสร้างไว้

/**
 * ฟังก์ชันสำหรับอัปโหลดรูปภาพไปยัง Cloudinary
 * @param {File} file - ไฟล์รูปภาพจาก input type="file"
 * @returns {Promise<string|null>} - คืนค่า URL ของรูปภาพที่อัปโหลดสำเร็จ หรือ null ถ้าพลาด
 */
export async function uploadToCloudinary(file) {
    if (!file) return null;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,[span_4](start_span)[span_4](end_span){env: "live"})
        {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        
        if (data.secure_url) {
            return data.secure_url; // URL ของรูปภาพสำหรับนำไปใช้งานต่อ
        } else {
            console.error('Upload failed:', data);
            return null;
        }
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        return null;
    }
}
