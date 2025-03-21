"use client";
import React, { useState } from "react";
import { Checkbox } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";


export type Photo = {
  id: string;
  file: File;
};

const AddPhoto: React.FC = () => {
  const [profilePhoto, setProfilePhoto] = useState<Photo | null>(null);
  const [additionalPhotos, setAdditionalPhotos] = useState<Photo[]>([]);

  const handleProfilePhotoUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePhoto({
        id: URL.createObjectURL(file),
        file,
      });
    }
  };

  const handleAdditionalPhotoUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    const newImages = files.map((file) => ({
      id: URL.createObjectURL(file),
      file,
    }));
    setAdditionalPhotos((prevImages) => [...prevImages, ...newImages]);
  };

  const handleDeleteAdditionalPhoto = (id: string) => {
    setAdditionalPhotos((prevImages) =>
      prevImages.filter((image) => image.id !== id)
    );
  };

  const profilePhotoUploadButton = (
    <label htmlFor="profile-photo-upload" className="cursor-pointer">
      <div className="size-16 rounded-full border-2 border-dashed border-gray-950 flex items-center justify-center">
        <AiOutlinePlus className="text-gray-950 mx-auto size-8" />
      </div>
      <input
        id="profile-photo-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleProfilePhotoUpload}
      />
    </label>
  );

  const additionalPhotoUploadButton = (
    <label htmlFor="additional-photo-upload" className="cursor-pointer">
      <div className="size-16 rounded-full border-2 border-dashed border-gray-950 flex items-center justify-center">
        <AiOutlinePlus className="text-gray-950 mx-auto size-8" />
      </div>
      <input
        id="additional-photo-upload"
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleAdditionalPhotoUpload}
      />
    </label>
  );

  return (
    <div className="w-full bg-gray-100 flex items-center justify-center pt-24 px-5 py-10">
      <div className="w-full md:container p-5 md:p-10">
        {/* Profile Photo Section */}
        <div className="mb-8 space-y-3">
          <h1 className="text-2xl font-semibold mb-4 text-primary">
            Add Profile Photo
          </h1>
          <div className="w-60 h-64 border border-gray-950 flex justify-center items-center relative">
            {profilePhoto ? (
              <div className="w-full h-full relative">
                <Image
                  src={profilePhoto.id}
                  alt="profile"
                  fill
                  className="w-full h-full absolute"
                />
                <div className="p-2 flex cursor-pointer justify-end items-center bg-opacity-65 absolute top-2 right-2 bg-white rounded-full">
                  <label htmlFor="profile-photo-upload">
                    <AiOutlinePlus className="size-5 text-blue-500 cursor-pointer" />
                  </label>
                  <input
                    id="profile-photo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilePhotoUpload}
                  />
                </div>
              </div>
            ) : (
              profilePhotoUploadButton
            )}
          </div>
          <div className="space-y-1">
            <h1 className="text-[16px]">Choose Profile Photo Viewers</h1>
            <Checkbox>Standard Subscription User</Checkbox>
          </div>
        </div>

        {/* Additional Photos Section */}
        <div className="mb-8 space-y-3">
          <h1 className="text-2xl font-semibold mb-4 text-primary">
            Add More Photos To Your Profile
          </h1>
          <div className="flex flex-wrap gap-4">
            {additionalPhotos.map((image) => (
              <div key={image.id} className="w-60 h-64 relative">
                <Image
                  src={image.id}
                  alt="profile"
                  fill
                  className="w-full h-full absolute"
                />
                <div
                  className="p-2 flex cursor-pointer justify-end items-center bg-opacity-65 absolute top-2 right-2 bg-white rounded-full"
                  onClick={() => handleDeleteAdditionalPhoto(image.id)}
                >
                  <FaTrashAlt className="size-5 text-rose-500" />
                </div>
              </div>
            ))}
            <div className="w-60 h-64 border border-gray-950 flex justify-center items-center">
              {additionalPhotoUploadButton}
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-[16px]">Choose Profile Photo Viewers</h1>
            <Checkbox>Standard Subscription User</Checkbox>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          
          <button className="px-6 py-2 bg-primary hover:bg-[#193f72] transition-all duration-300 text-white rounded-lg">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
