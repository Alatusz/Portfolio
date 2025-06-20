const Contact = () => {
  return (
<div className="max-w-[1280px] mx-auto">
  <div className="grid grid-cols-10 gap-4"> 

    {/* Card 70% */}
    <div className="col-span-7 card-glassmorphism-transparent p-6 rounded-lg shadow-md border-2 border-blue-500 min-h-[200px]">
      <h3 className="text-xl font-bold text-blue-800">Contact (70%)</h3>
    </div>

    {/* Card 30% */}
    <div className="col-span-3 card-glassmorphism-transparent p-6 rounded-lg shadow-md border-2 border-green-500 min-h-[200px]">
      <h3 className="text-xl font-bold text-green-800">Social (30%)</h3>
    </div>

  </div>
</div>
  )
}

export default Contact