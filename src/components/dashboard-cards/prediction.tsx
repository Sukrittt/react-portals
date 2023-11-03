import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";

const Prediction = () => {
  const results = {
    YES: {
      data: [
        {
          value: "119K",
          icon: Icons.circle,
        },
        {
          value: "1:1.16",
          icon: Icons.trophy,
        },
        {
          value: 51,
          icon: Icons.users,
        },
        {
          value: "35.3K",
          icon: Icons.award,
        },
      ],
      percentage: "87%",
    },
    NO: {
      data: [
        {
          value: "18.5K",
          icon: Icons.circle,
        },
        {
          value: "1:7.44",
          icon: Icons.trophy,
        },
        {
          value: 24,
          icon: Icons.users,
        },
        {
          value: "5.5K",
          icon: Icons.award,
        },
      ],
      percentage: "13%",
    },
  };

  return (
    <div className="flex flex-col justify-between h-full overflow-y-auto">
      <CardContent className="py-3">
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-4">
            <div className="relative flex items-center justify-center h-8 w-8 text-xl font-bold rounded-full bg-pink-600">
              <span>4</span>
              <Icons.star
                className="absolute h-5 w-5 -top-1.5 -right-1.5 text-neutral-900"
                fill="#db2777"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                Will screen capture work first try today?
              </p>
              <p className="text-xl font-bold">
                137K Channel Points awarded to 24 viewers
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <div className="grid grid-cols-2">
              <div />
              <div className="flex items-center gap-x-px">
                <Icons.checkmark className="h-5 w-5 text-black" fill="white" />
                <span className="text-sm">Winner</span>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="border-r flex justify-between px-2">
                <div className="flex flex-col gap-y-1">
                  {results["YES"].data.map((item, index) => (
                    <div className="flex items-center gap-x-2" key={index}>
                      <item.icon className="h-4 w-4 text-blue-600" />
                      <p className="text-sm font-normal">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-end flex-col gap-y-2 text-blue-600">
                  <span className="text-xl font-extrabold">Yes</span>
                  <span className="text-4xl font-extrabold">
                    {results["YES"].percentage}
                  </span>
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{
                      width: results["YES"].percentage,
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-row-reverse justify-between px-2">
                <div className="flex flex-col gap-y-1">
                  {results["NO"].data.map((item, index) => (
                    <div className="flex items-center gap-x-2" key={index}>
                      <item.icon className="h-4 w-4 text-pink-600" />
                      <p className="text-sm font-normal">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-y-2 text-pink-600">
                  <span className="text-xl font-extrabold">No</span>
                  <span className="text-4xl font-extrabold">
                    {results["NO"].percentage}
                  </span>
                  <div
                    className="h-2 bg-pink-600 rounded-full"
                    style={{
                      width: results["NO"].percentage,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t py-2 px-3 items-center shadow-md flex justify-end">
        <Button size="sm">Start Predicting</Button>
      </CardFooter>
    </div>
  );
};

export default Prediction;
