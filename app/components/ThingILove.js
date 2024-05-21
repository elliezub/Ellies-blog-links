export default function ThingsILove() {
  return (
    <div className="flex justify-center flex-col mt-20 max-w-6xl mx-auto ">
      <div>
        <h2 className="text-6xl text-center mb-6">Things I Love</h2>
      </div>
      <div className="text-indigo-600 sm:grid-cols-4 mx-auto grid grid-cols-2 gap-3">
        <div className=" rounded-xl overflow-hidden max-h-[600px] max-w-[400px]">
          <img src="https://images.unsplash.com/photo-1518843025960-d60217f226f5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        </div>

        <div className=" rounded-xl overflow-hidden max-h-[600px] max-w-[400px]">
          <img src="https://images.unsplash.com/photo-1516743619420-154b70a65fea?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        </div>

        <div className=" rounded-xl overflow-hidden max-h-[600px] max-w-[400px]">
          <img src="https://images.unsplash.com/photo-1634838080334-28befa9efe80?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        </div>

        <div className=" rounded-xl overflow-hidden max-h-[600px] max-w-[400px]">
          <img
            src="https://images4.alphacoders.com/108/thumb-1920-1085889.jpg"
            className=" w-full h-full object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
}