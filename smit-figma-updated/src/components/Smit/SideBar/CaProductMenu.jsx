import React from 'react'
const navigation = [
  {name:"Overview", icon:() =>  <img src="https://i.ibb.co/jRXzW45/Menu.png" class="w-6 h-6 mr-3"/>,current: false},
  {name:"Leaderboard", icon:() =>  <img src="https://i.ibb.co/9Gf1WXM/Award.png" class="w-6 h-6 mr-3"/>,current: false},
  {name:"Spreadsheets", icon:() =>  <img src="https://i.ibb.co/C6BHm4m/Grid-3.png" class="w-6 h-6 mr-3"/>,current: false},
  {name:"Administration", icon:() =>  <img src="https://i.ibb.co/sbfnkVd/Group.png" class="w-6 h-6 mr-3"/>,current: false},
  {name:"Sales", icon:() =>  <img src="https://i.ibb.co/M6nYzMN/Bag-2.png" class="w-6 h-6 mr-3"/>,current: true},
  {name:"Schedule", icon:() =>  <img src="https://i.ibb.co/Gd0YHZn/Calendar.png" class="w-6 h-6 mr-3"/>,current: false},
];
const navigationOne = [
  {name:"Message", icon:() =>  <img src="https://i.ibb.co/XxVK8xy/Message-4.png" class="w-6 h-6 mr-3"/>,current: false},
  {name:"Support", icon:() =>  <img src="https://i.ibb.co/jT8PbBV/Phone.png" class="w-6 h-6 mr-3"/>,current: false},
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const CaProductMenu = () => {
  return (
    <nav className="px-4 mt-6">
    <div className="space-y-1">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? "text-gray-800"
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-50",
            "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          <item.icon
            className={classNames(
              item.current
                ? "text-yellow-500"
                : "text-gray-400 group-hover:text-gray-500",
              "mr-3 flex-shrink-0 h-6 w-6"
            )}
            aria-hidden="true"
          />
          {item.name}
        </a>
      ))}
    </div>
    <h3 className="mt-4 ml-2 text-lg font-medium">My Teams</h3>
    <div className="flex items-start  flex-col mt-8">
      
    <div className="space-y-1">
      {navigationOne.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? "text-gray-800"
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-50",
            "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          <item.icon
            className={classNames(
              item.current
                ? "text-yellow-500"
                : "text-gray-400 group-hover:text-gray-500",
              "mr-3 flex-shrink-0 h-6 w-6"
            )}
            aria-hidden="true"
          />
          {item.name}
        </a>
      ))}
    </div>
    <img src='https://i.ibb.co/P6NRCyn/Upgrade.png' className='mt-5'/>
    </div>
  </nav>
  )
}

export default CaProductMenu