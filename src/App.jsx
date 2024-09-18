import './App.css'

function App() {

  return (
    <>
    {/* Part 1 */}
      <div className=' bg-orange-300 h-screen m-2'>
        <div className='bg-fuchsia-400 h-2/6 w-1/5'></div>
      </div>

    {/* Part 2 */}
      <div className=' bg-orange-300 h-screen m-2 flex justify-end'>
        <div className='bg-fuchsia-400 h-2/6 w-1/5'></div>
      </div>

    {/* Part 3 */}
      <div className=' bg-orange-300 h-screen m-2 flex justify-center items-center'>
        <div className='bg-fuchsia-400 h-2/6 w-1/5'></div>
      </div>

    {/* Part 4 */}
      <div className=' bg-orange-300 h-screen m-2 flex items-end'>
        <div className='bg-fuchsia-400 h-2/6 w-1/5'></div>
      </div>

    {/* Part 5 */}
      <div className=' bg-orange-300 h-screen m-2 flex justify-end items-end'>
        <div className='bg-fuchsia-400 h-2/6 w-1/5'></div>
      </div>

    {/* Part 6 */}
      <div className=' bg-orange-300 h-screen m-2 flex'>
        <div className='bg-fuchsia-400 h-full w-1/5'></div>
      </div>

    {/* Part 7 */}
      <div className=' bg-orange-300 h-screen m-2'>
        <div className='bg-fuchsia-400 h-full w-1/2'></div>
      </div>

    {/* Part 8 */}
      <div className='h-screen m-2'>
        <div className='bg-orange-300 flex flex-col h-full'>
          <div className='bg-fuchsia-400 h-1/3 w-1/2'></div>
          <div className='bg-fuchsia-400 flex self-end h-1/3 w-1/2'></div>
          <div className='bg-fuchsia-400 h-1/3 w-1/2'></div>
        </div>
      </div>

    {/* Part 9 */}
      <div className='h-screen m-2'>
        <div className='bg-orange-300 flex flex-row h-full'>
          <div className='bg-fuchsia-400 h-1/2 w-1/3'></div>
          <div className='bg-fuchsia-400 flex self-end h-1/2 w-1/3'></div>
          <div className='bg-fuchsia-400 h-1/2 w-1/3'></div>
        </div>
      </div>
      
    {/* Part 10 */}
      <div className='h-screen m-2 overflow-hidden'>
        <div className='bg-orange-300 h-full flex justify-end items-center'>
          <div className='bg-orange-300 flex justify-center items-center w-1/2 h-[60%]'>
            <div className='bg-fuchsia-400 h-full w-2/3'></div>
          </div>
        </div>
      </div>
      <div className='h-screen m-2 overflow-hidden'>
        <div className='h-full w-full bg-fuchsia-400 flex justify-start'>
          <div className='h-full w-1/2 bg-yellow-200'></div>
        </div>
      </div>
      <div className='h-screen m-2 overflow-hidden'>
        <div className='flex flex-col h-full w-full bg-slate-200'>
          <div className='flex flex-row h-full w-full my-16'>
            <div className='h-3/4 w-1/6 mx-8 mb-8 bg-fuchsia-400'></div>  
            <div className='h-3/4 w-1/6 mx-8 mt-28 bg-fuchsia-400'></div>  
            <div className='h-3/4 w-1/6 mx-8 bg-fuchsia-400'></div>  
            <div className='h-3/4 w-1/6 mx-8 mt-28 bg-fuchsia-400'></div>  
            <div className='h-3/4 w-1/6 mx-8 mb-8 bg-fuchsia-400'></div>  
          </div>
        </div>
      </div>
      <div className='h-screen m-2 overflow-hidden'>
        <div className='flex items-center h-full w-full bg-red-200'>
          <div className='my-28 flex flex-row justify-between h-5/6 w-full'>
            <div className='h-full w-1/2 bg-fuchsia-400'></div>
            <div className='h-full w-[47%] flex flex-col justify-between'>
              <div className='h-1/4 w-full bg-violet-300'></div>
              <div className='h-1/4 w-full bg-violet-300 mt-4'></div>
              <div className='h-1/4 w-full bg-violet-300 mt-4'></div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
