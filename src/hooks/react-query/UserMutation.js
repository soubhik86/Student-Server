
import { useMutation} from '@tanstack/react-query'
import { USERS } from './Querykeys'
import { login, register } from '../../api/ApiHandler'
import { Globalhooks } from '../Globalhooks'



export const userRegisterMutation = ()=>{
  const {queryClient , navigate} = Globalhooks();

  return useMutation({
    mutationFn: register,
    onSuccess: (response)=>{
navigate("/login")
queryClient.invalidateQueries({ queryKey: [USERS] })

    }
  })

}



export const userLogininMutation = ()=> {
  const {queryClient , navigate} = Globalhooks()

  return useMutation({
    mutationFn: login,
    onSuccess: (response)=>{
      console.log(response);
      const { status , token , message , user:{ name , image}} = response || {}

if( status=== true){
  localStorage.setItem("token", token);
  localStorage.setItem("name", name);
  localStorage.setItem("proimg", image);
  navigate("/create");
}  else {
  navigate("/login");
}
queryClient.invalidateQueries({ queryKey: [USERS]})

    }
  })
}  

