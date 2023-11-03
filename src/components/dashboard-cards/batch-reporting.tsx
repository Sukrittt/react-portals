import { CardContent } from "@/components/ui/card";
import { Icons } from "../icons";

const BatchReporting = () => {
  return (
    <CardContent className="h-full space-y-2 flex flex-col items-center text-center justify-center text-muted-foreground">
      <Icons.badgeAlert className="w-12 h-12" />
      <p className="font-bold">No Recent Banned or Timed Out Users</p>
      <p>
        Users who have been recently banned or timed out will be listed here.
        You can select several users at once to report to Twitch.
      </p>
    </CardContent>
  );
};

export default BatchReporting;
