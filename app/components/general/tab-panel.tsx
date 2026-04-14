import { Tabs } from '@mantine/core';
import { tablPanel } from '../utils/utils';
import { Link } from 'react-router';
import Linked from './linked';

export default function FloatingActionButtonZoom() {
  return (
    <div>
      <Tabs defaultValue="usd" variant="outline" radius="md">

        {/* Tabs Header */}
        <Tabs.List grow>
          <Tabs.Tab value="usd">USD</Tabs.Tab>
          <Tabs.Tab value="eur">EUR</Tabs.Tab>
          <Tabs.Tab value="gbp">GBP</Tabs.Tab>
          <Tabs.Tab value="yen">YEN</Tabs.Tab>
        </Tabs.List>

        {/* USD */}
        <Tabs.Panel value="usd" pt="md">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {tablPanel.map((item, i: number) => (
              <div key={i} className="bg-gray rounded-xl mb-4 flex items-center justify-center flex-col px-5 py-10 text-center">
                <p className="font-bold mb-1 mt-4 uppercase text-[1.2rem]">GET {item.amount}</p>
                <h2 className="text-sm font-semibold py-5">FOR</h2>
                <p className="font-semibold text-[1.4rem]">$ {item.price}</p>
                <Linked to="" className="mt-6 border-2 border-yellow px-8 py-2.5 rounded-full hover:bg-yellow hover:text-white font-semibold">BUY</Linked>
              </div>
            ))}
          </div>
        </Tabs.Panel>

        {/* EUR */}
        <Tabs.Panel  value="eur" pt="md">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {tablPanel.map((item, i: number) => (
              <div key={i} className="bg-gray rounded-xl mb-4 flex items-center justify-center flex-col px-5 py-10 text-center">
                <p className="font-bold mb-1 mt-4 uppercase text-[1.2rem]">
                  GET {item.amount}
                </p>
                <h2 className="text-sm font-semibold py-5">FOR</h2>
                <p className="font-semibold text-[1.4rem]">€ {item.price}</p>
                <Linked to="" className="mt-6 border-2 border-yellow px-8 py-2.5 rounded-full hover:bg-yellow hover:text-white font-semibold">
                  BUY
                </Linked>
              </div>
            ))}
          </div>
        </Tabs.Panel>

        {/* GBP */}
        <Tabs.Panel value="gbp" pt="md">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {tablPanel.map((item, i: number) => (
              <div key={i} className="bg-gray rounded-xl mb-4 flex items-center justify-center flex-col px-5 py-10 text-center">
                <p className="font-bold mb-1 mt-4 uppercase text-[1.2rem]">GET {item.amount}</p>
                <h2 className="text-sm font-semibold py-5">FOR</h2>
                <p className="font-semibold text-[1.4rem]">£ {item.price}</p>
                <Linked to="" className="mt-6 border-2 border-yellow px-8 py-2.5 rounded-full hover:bg-yellow hover:text-white font-semibold">
                  BUY
                </Linked>
              </div>
            ))}
          </div>
        </Tabs.Panel>

        {/* YEN */}
        <Tabs.Panel value="yen" pt="md">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {tablPanel.map((item, i: number) => (
              <div key={i} className="bg-gray rounded-xl mb-4 flex items-center justify-center flex-col px-5 py-10 text-center">
                <p className="font-bold mb-1 mt-4 uppercase text-[1.2rem]">
                  GET {item.amount}
                </p>
                <h2 className="text-sm font-semibold py-5">FOR</h2>
                <p className="font-semibold text-[1.4rem]">¥ {item.price}</p>
                <Linked to="" className="mt-6 border-2 border-yellow px-8 py-2.5 rounded-full hover:bg-yellow hover:text-white font-semibold">
                  BUY
                </Linked>
              </div>
            ))}
          </div>
        </Tabs.Panel>

      </Tabs>
    </div>
  );
}