'use client';
import { useState } from 'react';

import { Plus } from 'lucide-react';
import { PlusCircle } from 'lucide-react';
import Modal from './Modal';
import { MessageCircle } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Mail } from 'lucide-react';
import { X } from 'lucide-react';

export default function DetailsCard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    youtube: '',
  });
  const [activeTab, setActiveTab] = useState('Basic');

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFormSubmit = () => {
    handleModalClose();
  };

  return (
    <div className="lg:col-span-3 h-[256px] rounded-lg overflow-hidden border-solid  border-2 border-gray-200 shadow-sm">
      {formData.name ? (
        // Details
        <div className="flex flex-col p-10">
          <div className="text-3xl font-bold">{formData.name}</div>
          <div className="flex pt-11 gap-5  ">
            <div className="flex flex-col gap-5  pr-20">
              {/* Phone */}
              <div className="flex gap-3 items-center">
                <div className="w-7 h-7 text-[#3CC952]  rounded-full bg-[#e9f9eb] flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <p className="text-sm underline">{formData.phone}</p>
              </div>
              {/* Email */}
              <div className="flex gap-3 items-center">
                <div className="w-7 h-7 text-[#5C33CF]  rounded-full bg-[#EBE6F9] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <p className="text-sm underline">{formData.email}</p>
              </div>
            </div>

            <div className="flex flex-col gap-5  pr-20">
              {/* Instagram */}
              <div className="flex gap-3 items-center ">
                <div className="w-7 h-7 text-[#FF4E64]  rounded-full bg-[#FFE9EC] flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </div>
                <p className="text-sm flex  underline">{formData.instagram}</p>
              </div>

              {/* Youtube */}
              <div className="flex gap-3 items-center ">
                <div className="w-7 h-7 text-[#FF0000]  rounded-full bg-[#FFE9E9] flex items-center justify-center">
                  <Youtube className="w-4 h-4" />
                </div>
                <p className="text-sm flex  underline">{formData.youtube}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Plus button
        <div className="flex flex-col items-center justify-center h-full gap-3">
          <button onClick={handleModalOpen}>
            <div className="w-20 h-20 text-[#999CA0] bg-[#F5F5F5]   rounded-full  flex items-center justify-center">
              <Plus className="w-10 h-10" />
            </div>
          </button>
          <p className="text-[#858585]">Add Profile</p>
        </div>
      )}
      <Modal isVisible={isModalOpen} onClose={handleModalClose}>
        <div className="grid">
          <div className="flex p-3 justify-between border-b-2 border-[#F2F2F2]">
            <h1 className="text-lg font-semibold">Add New Profile</h1>
            <div
              className="cursor-pointer text-[#999CA0]"
              onClick={handleModalClose}>
              <X />
            </div>
          </div>
          <div className="flex flex-row gap-5 p-5">
            <button
              className={`basis-1/2 border-b-4 text-black items-center justify-center text-md font-semibold ${
                activeTab === 'Basic'
                  ? '  border-[#3F84F8] '
                  : '  border-[#D9D9D9] '
              }`}
              onClick={() => handleTabChange('Basic')}>
              Basic
            </button>
            <button
              className={`basis-1/2 border-b-4 text-black items-center justify-center text-md font-semibold ${
                activeTab === 'Social'
                  ? ' border-[#3F84F8] '
                  : ' border-[#D9D9D9]'
              }`}
              onClick={() => handleTabChange('Social')}>
              Social
            </button>
          </div>

          {activeTab === 'Basic' && (
            <div className="w-full ">
              <form className="bg-white  rounded px-5 pt-6  mb-4">
                <div className="mb-4">
                  <label className="block   mb-2" htmlFor="username">
                    Enter Name*
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 "
                    id="username"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-6">
                  <label className="block   mb-2" htmlFor="email">
                    Enter Email*
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 "
                    id="username"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    type="email"
                    placeholder="john@xyz.com"
                  />
                </div>
                <div className="mb-6">
                  <label className="block   mb-2" htmlFor="email">
                    Enter Phone Number*
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 "
                    type="tel"
                    placeholder="+91-999999999"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="flex flex-row-reverse">
                  <button
                    onClick={() => handleTabChange('Social')}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                    type="button">
                    Next
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'Social' && (
            <div className="w-full ">
              <form className="bg-white  rounded px-5 pt-6  mb-4">
                <div className="mb-4">
                  <label className="block   mb-2" htmlFor="username">
                    Instagram Link{' '}
                    <span className="text-[#999CA0]">(Optional)</span>
                  </label>

                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 "
                    type="text"
                    placeholder="Instagram Username"
                    value={formData.instagram}
                    onChange={(e) =>
                      setFormData({ ...formData, instagram: e.target.value })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block   mb-2" htmlFor="username">
                    Youtube Link{' '}
                    <span className="text-[#999CA0]">(Optional)</span>
                  </label>

                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 "
                    type="text"
                    placeholder="YouTube Username"
                    value={formData.youtube}
                    onChange={(e) =>
                      setFormData({ ...formData, youtube: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-row-reverse gap-4">
                  <button
                    onClick={handleFormSubmit}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 mt-4 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                    type="button">
                    Done
                  </button>
                  <button
                    className="bg-transparent hover:bg-blue-700 text-blue-700 font-semibold py-2 mt-4 px-4 hover:text-white  rounded-lg border border-blue-700 hover:border-transparent  "
                    // className="bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4  border border-blue-500 hover:border-transparent rounded-lg"
                    type="button"
                    onClick={() => handleTabChange('Basic')}>
                    Back
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
