/* eslint-disable @next/next/no-async-client-component */
"use client";
import { useSearchParams } from "next/navigation";
import Table from "../../../components/table";
import useSWR from "swr";
import useTrans from "@/utils";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default async function Article() {
  const trans = useTrans();
  const params = useSearchParams();
  const size = 10;

  const tableConfig = [
    {
      label: "",
      dataIndex: "id",
      key: "checkbox",
      render: (id: string) => (
        <input type="checkbox" onClick={() => console.log(id)} />
      ),
    },
    {
      label: "Tên Pokemon",
      dataIndex: "name",
      key: "name",
    },
    {
      label: "Loại",
      dataIndex: "type",
      key: "type",
    },
    {
      label: "Tấn công",
      dataIndex: "attack",
      key: "attack",
    },
    {
      label: "HP",
      dataIndex: "hp",
      key: "color",
    },
    {
      label: "Kỹ năng đặc biệt",
      dataIndex: "specialAttack",
      key: "specialAttack",
    },
    {
      label: "Phòng thủ",
      dataIndex: "defense",
      key: "defense",
    },
    {
      label: "HP",
      dataIndex: "hp",
      key: "color",
    },
    {
      label: "Tốc độ",
      dataIndex: "speed",
      key: "speed",
    },
    {
      label: "Trạng thái",
      dataIndex: "state",
      key: "state",
    },
    {
      label: "hành động",
      dataIndex: "action",
      key: "action",
      render: (value: string) => (
        <span onClick={() => console.log(value)}>hoai</span>
      ),
    },
  ];

  const { data, error, isLoading } = useSWR(
    `https://shv3d.boomgames.vn/api/pokemons?page=${
      params.get("page") || 1
    }&size=${size}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <div>
      <span>{trans.home.title}</span>
      <Table
        dataSource={data?.items}
        tableConfig={tableConfig}
        pagination
        totalPages={data?.totalPages}
      />
    </div>
  );
}
