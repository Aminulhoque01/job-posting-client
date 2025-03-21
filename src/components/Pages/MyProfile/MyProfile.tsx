"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { useUpdateProfileMutation, useUpdateProfileImageMutation } from "@/redux/features/profile/profileApi";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { RootState } from "@/redux/store"; // Import the RootState type

export default function ProfileEdit() {
  // Use the properly typed selector
  const user = useSelector((state: RootState) => state.auth.user);

  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const [updateProfileImage] = useUpdateProfileImageMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
  });

  const [profileImage, setProfileImage] = useState<string>(typeof user?.profileImage === 'string' ? user.profileImage : "/profile-placeholder.png");

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: typeof user.fullName === 'string' ? user.fullName : "",
        email: typeof user.email === 'string' ? user.email : "",
        phone: typeof user.phone === 'string' ? user.phone : "",
        currentPassword: "",
        newPassword: "",
      });

      setProfileImage(typeof user.profileImage === 'string' ? user.profileImage : "/profile-placeholder.png");
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      try {
        await updateProfile({ id: user._id, ...formData }).unwrap();
        toast.success("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating profile:", error);
        toast.error("Failed to update profile.");
      }
    } else {
      toast.error("User is not logged in.");
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];
      const profileImage = URL.createObjectURL(imageFile);  
      setProfileImage(profileImage);  

      const formData = new FormData();
      formData.append("profileImage", imageFile);

      try {
        const response = await updateProfileImage(formData).unwrap();  
        setProfileImage(response.profileImage || profileImage); 
        toast.success("Profile image updated successfully!");
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload profile image.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:mt-10">
      {!user ? (
        <p>Please log in to edit your profile.</p>
      ) : (
        <>
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-300">
            <Image
              src={profileImage}
              alt="Profile Picture"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
            <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
              <Camera className="text-white w-6 h-6" />
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>

          <h2 className="text-lg font-semibold text-gray-700 mt-3">Profile Picture</h2>

          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mt-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-600 text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="abc@gmail.com"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-medium">Your Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="01283873"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-medium">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter current password"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-medium">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                disabled={isUpdating}
              >
                {isUpdating ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
