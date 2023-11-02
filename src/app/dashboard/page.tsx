import Chats from "@/components/chats";
import Community from "@/components/community";
import Prediction from "@/components/prediction";
import ModActions from "@/components/mod-actions";
import BathReporting from "@/components/batch-reporting";

const Dashboard = () => {
  return (
    <div className="h-full grid grid-cols-3 gap-4">
      <Prediction />
      <Chats />
      <div className="row-span-2">
        <Community />
      </div>
      <ModActions />
      <BathReporting />
    </div>
  );
};

export default Dashboard;
