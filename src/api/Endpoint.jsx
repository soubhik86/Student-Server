export const baseUrl = 'https://webskitters-student.onrender.com';

export const image = (media)=>{
  return ( `https://webskitters-student.onrender.com` +
  `/uploads/product/${media}`)
}

export const profilePic = (media)=>{
  return ( `https://webskitters-student.onrender.com` +
  `/uploads/user/profile_pic/${media}`)
}

export const endpoint = {
  users: {
    login: '/login',
    register: '/register',
  },
  products: {
    create: '/create/product',
    list: "/product",
    delete: "/delete/product",
    update: "/update/product",

    
  },

};
