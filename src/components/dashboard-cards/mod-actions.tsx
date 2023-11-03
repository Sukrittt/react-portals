import { CardContent } from "@/components/ui/card";
import { Icons } from "@/components/icons";

const ModActions = () => {
  const actions = [
    {
      username: "danielhe4rt",
      description: "Shouted out by Theo",
      createdAt: "5 minutes ago",
      icon: Icons.alert,
    },
    {
      username: "juiceboxhero",
      description: "Raid started by Theo with 297 viewers",
      createdAt: "7 days ago",
      icon: Icons.umbrella,
    },
    {
      username: "TauOns",
      description: "Added as moderator by Theo",
      createdAt: "7 days ago",
      icon: Icons.sword,
    },
    {
      username: '"climax"',
      description: "Added Permitted Term by Theo",
      createdAt: "7 days ago",
      icon: Icons.message,
    },
  ];

  return (
    <CardContent className="py-3 space-y-4 overflow-y-auto">
      <p className="text-sm">
        100 Actions <span className="text-purple-500">Select</span>
      </p>
      <div className="flex flex-col gap-y-3">
        {actions.map((action, index) => (
          <div className="text-sm flex gap-x-3 border-b pb-2" key={index}>
            <action.icon className="w-6 h-6" />
            <div className="flex flex-col gap-y-1">
              <p className="font-semibold">{action.username}</p>
              <p>
                {action.description} •{" "}
                <span className="text-muted-foreground">
                  {action.createdAt}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  );
};

export default ModActions;
