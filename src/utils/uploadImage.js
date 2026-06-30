import { supabase } from "@/lib/supabaseClient";

/**
 * Uploads an image to Supabase storage and returns its public URL
 *
 * @param {File} file - Image file to upload
 * @param {string} blogId - Unique blog identifier
 *
 * @returns {Promise<string>} Public URL of the uploaded image
 *
 * @description
 * This function:
 * 1. Generates a unique file path using blog ID, current date, and UUID
 * 2. Uploads the image to the "blog-images" storage bucket
 * 3. Retrieves and returns the public URL of the uploaded image
 *
 * @throws Will throw an error if the upload fails
 */
export async function uploadImage(file, blogId) {
    const fileExt = file.name.split(".").pop();
    const date = new Date().toISOString().split("T")[0];
    const filePath = `blog-${blogId}/${date}/${crypto.randomUUID()}.${fileExt}`;
     
    const { error } = await supabase.storage
    .from("blog-images")
    .upload(filePath, file);

    if (error) throw error;

    const { data } = supabase.storage
    .from("blog-images")
    .getPublicUrl(filePath);

    return data.publicUrl;
}