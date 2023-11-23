import MoreWidgets from "./MoreWidgets";
import WidgetLists from "./WidgetLists";

const Widgets = () => {
  return (
    <div className="max-w-7xl mx-auto mt-64 mb-14">
      {/* Heading */}
      <div className="flex text-center items-start justify-center">
        <div> 
          <h2 className="WidgetsHeading lg:text-7xl text-5xl font-extrabold leading-[1.08em]">
            Ultimate <br /> page builder
          </h2>
          <p className="text-center text-[#111111ed] pt-12 lg:text-4xl text-3xl font-semibold leading-[1.4em]">
            Enjoy a free-form canvas that lets you <br /> design your site intuitively,
            seamlessly <br /> and effortlessly.
          </p> 
        </div> 
      </div>
      <WidgetLists />
      <MoreWidgets />
    </div>
  );
};

export default Widgets;
