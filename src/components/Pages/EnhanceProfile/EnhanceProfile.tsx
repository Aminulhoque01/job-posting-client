"use client";
import { Form, Select, Input, DatePicker } from "antd";
import React from "react";

const { Option } = Select;
const { TextArea } = Input;

const EnhanceProfile = () => {
  return (
    <div className="w-full bg-gray-100 flex items-center justify-center pt-24 px-5 py-10">
      <div className="w-full md:container p-5 md:p-10">
        <h1 className="text-2xl font-semibold mb-8 text-blue-600">
          Enhance Your Profile
        </h1>
        <Form
          layout="vertical"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {/* Gender */}
          <Form.Item label="Select Your Gender" name="gender" rules={[
            {
              required: true,
              message: "Please select your gender",
            }
          ]}>
            <Select size="large" placeholder="Gender" className="w-full">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          {/* DOB */}
          <Form.Item label="Date of Birth" name="dob">
            <DatePicker
              size="large"
              placeholder="Date of Birth"
              className="w-full"
            />
          </Form.Item>

          {/* Continent */}
          <Form.Item label="Select Your Continent" name="continent">
            <Select size="large" placeholder="Continent" className="w-full">
              <Option value="asia">Asia</Option>
              <Option value="europe">Europe</Option>
              <Option value="north-america">North America</Option>
            </Select>
          </Form.Item>

          {/* Country */}
          <Form.Item label="Select Your Country" name="country">
            <Select size="large" placeholder="Country" className="w-full">
              <Option value="usa">USA</Option>
              <Option value="uk">UK</Option>
              <Option value="india">India</Option>
            </Select>
          </Form.Item>

          {/* State/Province */}
          <Form.Item label="Select Your State/Province" name="state">
            <Select
              size="large"
              placeholder="State/Province"
              className="w-full"
            >
              <Option value="new-york">New York</Option>
              <Option value="california">California</Option>
            </Select>
          </Form.Item>

          {/* City */}
          <Form.Item label="Select Your City/Town" name="city">
            <Select size="large" placeholder="City/Town" className="w-full">
              <Option value="new-york-city">New York City</Option>
              <Option value="los-angeles">Los Angeles</Option>
            </Select>
          </Form.Item>

          {/* Ethnicity */}
          <Form.Item label="Select Your Ethnicity" name="ethnicity">
            <Select size="large" placeholder="Ethnicity" className="w-full">
              <Option value="caucasian">Caucasian</Option>
              <Option value="asian">Asian</Option>
            </Select>
          </Form.Item>

          {/* Denomination */}
          <Form.Item label="Select Your Denomination" name="denomination">
            <Select size="large" placeholder="Denomination" className="w-full">
              <Option value="christian">Christian</Option>
              <Option value="muslim">Muslim</Option>
              <Option value="hindu">Hindu</Option>
            </Select>
          </Form.Item>

          {/* Education */}
          <Form.Item label="Select Your Education" name="education">
            <Select size="large" placeholder="Education" className="w-full">
              <Option value="high-school">High School</Option>
              <Option value="graduate">Graduate</Option>
            </Select>
          </Form.Item>

          {/* Marital Status */}
          <Form.Item label="Select Your Marital Status" name="maritalStatus">
            <Select
              size="large"
              placeholder="Marital Status"
              className="w-full"
            >
              <Option value="single">Single</Option>
              <Option value="married">Married</Option>
            </Select>
          </Form.Item>

          {/* Hobby */}
          <Form.Item label="Select Your Hobby" name="hobby">
            <Select size="large" placeholder="Hobby" className="w-full">
              <Option value="reading">Reading</Option>
              <Option value="traveling">Traveling</Option>
            </Select>
          </Form.Item>

          {/* Occupation */}
          <Form.Item label="Select Your Occupation" name="occupation">
            <Select size="large" placeholder="Occupation" className="w-full">
              <Option value="engineer">Engineer</Option>
              <Option value="doctor">Doctor</Option>
            </Select>
          </Form.Item>

          {/* Interest Tags */}
          <Form.Item
            label="Select Your Interests"
            name="interests"
            className="md:col-span-3"
          >
            <Select
              mode="tags"
              size="large"
              placeholder="Add your interests"
              className="w-full"
            />
          </Form.Item>

          {/* Describe Yourself */}
          <Form.Item
            label="Describe Yourself"
            name="description"
            className="md:col-span-3"
          >
            <TextArea rows={6} placeholder="Write about yourself here" />
          </Form.Item>

          {/* Buttons */}
          <div className=" col-span-3 flex justify-between items-center mt-8">
            <button className="px-6 py-2 bg-white text-primary border hover:bg-primary hover:text-white transition-all duration-300 border-primary rounded-lg">
              Previous
            </button>
            <Form.Item >
              <button
                type="submit"
                className="px-6 py-2 bg-primary hover:bg-[#193f72] transition-all duration-300 text-white rounded-lg"
              >
                Discover
              </button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EnhanceProfile;
