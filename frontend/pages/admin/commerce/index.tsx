import type { NextPage } from "next";
import CommerceTable from "../../../components/admin/Commerce";
import AdminMain from "../../../components/admin/Main";
import AdminNav from "../../../components/admin/NavBar";

const AdminCommerce: NextPage = () => {
  return (
    <div>
      <AdminNav></AdminNav>
      <CommerceTable></CommerceTable>
      <AdminMain></AdminMain>
    </div>
  );
};

export default AdminCommerce;
