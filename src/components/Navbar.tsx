export default function Navbar() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex max-w-6xl w-full
          justify-between items-center z-10 py-5 lg:px-12 px-5">

      {/* Left */}
      <div className="flex items-center gap-3 text-card select-none">
        <div className="bg-primary rounded-full w-5 h-5 p-5 flex 
              items-center justify-center">
          <span className="text-lg font-sans font-bold tracking-tight text-primary-foreground">C</span>
        </div>

        <div className="flex flex-col">
          <span className="font-bold font-sans text-lg tracking-tight">CAMAD</span>
          <span className="font-light font-sans text-xs text-card/70">Community Action Machynlleth</span>
        </div>
      </div>

      {/* Right */}
      <div>

      </div>
    </div>
  )
}