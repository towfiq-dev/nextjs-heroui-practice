export const addingTask = async(formData)=>{
  "use server"
  const name = formData.get('name')
  const title = formData.get('title')
  const email = formData.get('email')
  const description = formData.get('description')
  console.log("Dorm Submit",{ name, title, email, description});
  
}