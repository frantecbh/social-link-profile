export default function App() {
  return (
   <div className="flex items-center justify-center h-screen">
    <div className="bg-zinc-800 flex flex-col items-center p-8 rounded-md w-full max-w-96 mx-4">
      <img className="size-24 rounded-full" src="https://avatars.githubusercontent.com/u/60010539?v=4" alt="avatar" />
      <div className="mt-6 flex flex-col items-center space-y-2">
      <p className="font-semibold text-2xl">Francisco Menezes</p>
      <span className="text-lime-400 font-bold">Belo Horizonte, Brasil</span>
      </div>
      <span className="mt-6 text-sm sm:text-md">{`"Frontend Developer and Infrastructure"`}</span>
      <div className="flex flex-col space-y-2 w-full mt-6">       
        <a href="https://github.com/frantecbh" target="_blank"  className="bg-zinc-700 hover:bg-lime-500 hover:text-zinc-800  w-full  h-11 font-bold rounded-md duration-300 flex items-center justify-center">GitHub</a>
        <a href="https://www.frontendmentor.io/profile/frantecbh" target="_blank" className="bg-zinc-700 hover:bg-lime-400 hover:text-zinc-800  w-full  h-11 font-bold rounded-md duration-300 flex items-center justify-center">Frontend Mentor</a>
        <a href="https://www.linkedin.com/in/francisco-menezes-875a0a36/" target="_blank"className="bg-zinc-700 hover:bg-lime-400 hover:text-zinc-800  w-full  h-11 font-bold rounded-md duration-300 flex items-center justify-center">Linkedin</a>
        <a href="#" target="_blank" className="bg-zinc-700 hover:bg-lime-400 hover:text-zinc-800  w-full  h-11 font-bold rounded-md duration-300 flex items-center justify-center">Twitter</a>
        <a href="https://www.instagram.com/frantec/" target="_blank" className="bg-zinc-700 hover:bg-lime-400 hover:text-zinc-800  w-full  h-11 font-bold rounded-md duration-300 flex items-center justify-center">Instagram</a>
        
      </div>
    
    </div>
   </div>
  )
}