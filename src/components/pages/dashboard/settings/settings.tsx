import Image from "next/image";
import React from "react";
import {
  Button,
  Checkbox,
  Input,
  Label,
  Modal,
} from "@/components/components/index";
import Tabs from "../../../components/tabs";
import { TTabs } from "@/components/types/utils";
import { prisma } from "../../../../../lib/prisma";

export default async function Settings() {
  async function onSubmit(formData: FormData) {
    "use server";
    await prisma.user.update({
      where: { id: "clryb0y7d000010dhg3gvqvdn" },
      data: {
        name: formData.get("name")?.toString(),
        email: formData.get("email")?.toString(),
        phone: formData.get("phone")?.toString(),
        profile: formData.get("profile")?.toString(),
        contact: formData.get("contact")?.toString(),
      },
    });
  }

  // const user = await prisma.user.findFirst({
  //   where: {
  //     id: "clryb0y7d000010dhg3gvqvdn",
  //   },
  // });

  const user = {} as any;

  const tabsData: TTabs[] = [
    {
      key: "1",
      label: "Life",
      children:
        "Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1 Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Education",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Money",
      children: "Content of Tab Pane 3",
    },
  ];
  async function onDeleteAccount() {
    "use server";
  }
  return (
    <div>
      <span className="font-semibold">Account Information</span>
      <div className="p-2 flex items-center gap-10">
        <div>
          <span className="text-sm font-semibold">Your Avatar</span>
          <Image
            src={
              "https://shv3d.boomgames.vn/api/uploads//assets/Ho-oh_f59d2425-e323-4f1a-8152-094773235e47.png"
            }
            alt=""
            width={100}
            height={90}
            className="bg-red-200 rounded-full p-2"
          />
        </div>

        <div className="flex gap-2">
          <Button
            label={"Upload"}
            className="bg-white border-blue-500 text-blue-500 "
          />
          <Button
            label={"Remove"}
            className="bg-white border-red-500 text-red-500"
          />
        </div>
      </div>
      <div className="divider" />
      <form action={onSubmit}>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4">
          <div>
            <Label title={"Name"} isRequired />
            <Input
              type={"text"}
              name={"name"}
              value={user?.name || ""}
              required
            />
          </div>
          <div>
            <Label title={"Display Name"} isRequired />
            <Input
              type={"text"}
              name={"displayName"}
              required
              value={user?.name || ""}
            />
          </div>

          <div>
            <Label title={"Email"} isRequired />
            <Input
              type={"email"}
              name={"email"}
              value={user?.email || ""}
              required
            />
          </div>
          <div>
            <Label title={"Phone"} isRequired />
            <Input
              type={"text"}
              name={"phone"}
              value={user?.phone || ""}
              required
            />
          </div>
        </div>
        <div className="divider" />

        <div>
          <div>
            <Label title="Profile Visibility" />
            <div className="flex gap-10">
              <Checkbox
                name="profile"
                label="Public"
                value="public"
                dataSource={user}
              />
              <Checkbox
                name="profile"
                label="Private"
                value="private"
                dataSource={user}
              />
            </div>
            <span className="text-sm text-gray-400">
              Making your profile public means anyone can see your infomation
            </span>
          </div>
          <div>
            <Label title="Contact Info Visibility" />
            <div className="flex gap-10">
              <Checkbox
                name="contact"
                label="Public"
                value="public"
                dataSource={user}
              />
              <Checkbox
                name="contact"
                label="Private"
                value="private"
                dataSource={user}
              />
            </div>
            <span className="text-sm text-gray-400">
              Making your your contact info public means anyone can see your
              email and phone number
            </span>
          </div>
        </div>
        <Label title="Detail" />
        <Tabs tabsConfig={tabsData} />

        <div className="divider" />
        <div className="flex justify-between items-center">
          <span className="font-semibold">
            Remove account{" "}
            <span className="text-sm font-normal text-gray-400">
              your account you will lose all your data
            </span>
          </span>
          <Button
            label="Remove Account"
            className="bg-white border-red-500 text-red-500"
            htmlFor="my_modal_6"
          />
        </div>
        <div className="divider" />
        <Button
          label="Save Changes"
          className="bg-blue-600 border-none text-white"
          type="submit"
        />
      </form>
      <Modal
        id={"my_modal_6"}
        title={"Are you sure to delete your account?"}
        content={"If the account is deleted, it cannot be restored "}
        onOk={onDeleteAccount}
        close
      />
    </div>
  );
}
