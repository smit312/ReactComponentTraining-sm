import React from "react";

const UserAccount = () => {
  return (
    <div className="flex items-center justify-center mt-20 flex-col">
      {/* User account */}
      <div className="w-52 h-48 bg-yellow-50 flex justify-center items-center flex-col rounded-2xl">
        <img
          className="inline-block h-14 w-14 rounded-lg mb-3"
          src="https://i.ibb.co/7QP6TXx/Avatar-6.png"
          alt=""
        />
        <div className="avatar-name">Linh Nguyen</div>
        <div className="text-sm font-light text-gray-600">Owner & Founder</div>
      </div>
    </div>
  );
};

export default UserAccount;
