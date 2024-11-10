// import React from "react";

// // Define interfaces directly in this file
// interface Member {
//   id: string;
//   username: string;
//   avatar_url: string;
// }

// interface WidgetData {
//   presence_count: number;
//   members: Member[];
// }

// interface DiscordWidgetProps {
//   widgetData: WidgetData;
// }

// // Fetch data and type it using WidgetData
// export async function getServerSideProps() {
//   const res = await fetch(
//     "https://discord.com/api/guilds/YOUR_SERVER_ID/widget.json"
//   );
//   const data: WidgetData = await res.json(); // Cast the data as WidgetData

//   return {
//     props: {
//       widgetData: data,
//     },
//   };
// }

// // Component
// const DiscordWidget: React.FC<DiscordWidgetProps> = ({ widgetData }) => {
//   return (
//     <div className="w-80 bg-indigo-600 text-white rounded-lg font-sans p-4">
//       <div className="flex justify-between items-center bg-indigo-500 px-4 py-2 rounded-t-lg font-bold">
//         <span>Discord</span>
//         <span className="text-sm">
//           {widgetData.presence_count} Members Online
//         </span>
//       </div>
//       <div className="bg-gray-800 p-4 max-h-72 overflow-y-auto rounded-b-lg">
//         {widgetData.members.map((member) => (
//           <div
//             key={member.id}
//             className="flex items-center py-2 border-b border-gray-600"
//           >
//             <img
//               src={member.avatar_url}
//               alt={`${member.username}'s avatar`}
//               className="w-8 h-8 rounded-full mr-3"
//             />
//             <span>{member.username}</span>
//           </div>
//         ))}
//       </div>
//       <div className="text-center text-xs text-gray-300 mt-4">
//         Hangout with people who get it
//       </div>
//     </div>
//   );
// };

// export default DiscordWidget;
