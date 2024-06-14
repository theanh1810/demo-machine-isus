import { useState } from "react";
import { Table, Tag, Button, Layout, Tooltip, Modal, Select, message } from "antd";
import { ReloadOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate  } from "react-router-dom";
import useFetchMachines from "../../hooks/Machine/useFetchMachines";
import useAddMachine from "../../hooks/Machine/useAddMachine";
import useFetchMachineAll from "../../hooks/Machine/useFetchMachineAll";
import useDeleteItem from "../../hooks/UI/useDeleteItem";
import BreadcrumbLayout from "../UI/BreadcrumbLayout/BreadcrumbLayout";
import "./Machine.css";

const { Content } = Layout;
const { Option } = Select;

const MachineList = ({ colorBgContainer, borderRadiusLG }) => {
  const { machines, loadingMachines, errorMachines, reloadMachines } = useFetchMachines();
  const { machinesAll } = useFetchMachineAll();
  const { loadingDelete, errorDelete, deleteItem } = useDeleteItem();
  const { loadingAdd, errorAdd, addMachines } = useAddMachine();
  const [deleteMachineId, setDeleteMachineId] = useState(null); // Di chuyển khởi tạo xuống đây
  const [modalVisible, setModalVisible] = useState(false);
  const [newModalVisible, setNewModalVisible] = useState(false);
  const [newMachines, setNewMachines] = useState([]);
  const navigate = useNavigate();
  const columns = [
    {
      title: "ID",
      dataIndex: "machine_select_id",
      align: "center",
      key: "id",
    },
    {
      title: "Tên Máy",
      dataIndex: "MasterMachine.machine_name",
      align: "center",
      key: "name",
    },
    {
      title: "Mã Máy",
      dataIndex: "MasterMachine.machine_symbols",
      align: "center",
      key: "symbols",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "MasterMachine.machine_image",
      align: "center",
      key: "image",
      render: (image) => (
        <img
          src={`${image}`}
          style={{ width: "50px", height: "auto" }}
          alt="Hình ảnh"
        />
      ),
    },
    {
      title: "Trạng Thái",
      dataIndex: "MasterMachine.is_active",
      align: "center",
      key: "MasterMachine.is_active",
      render: (is_active) =>
        is_active == true ? (
          <Tag color="green">Hoạt Động</Tag>
        ) : (
          <Tag color="red">Bảo Trì</Tag>
        ),
    },
    {
      title: "Thao Tác",
      key: "action",
      align: "center",
      render: (text, record) => (
        <>
          <Button
            type="primary"
            style={{ marginRight: 8 }}
            onClick={() => handleDetail(record.machine_select_id)}
          >
            Chi Tiết
          </Button>
          <Button type="primary" danger onClick={() => showModal(record.machine_select_id)}>
            Xóa
          </Button>
        </>
      ),
    },
  ];

  const columns_machine_select = [
    {
      title: "ID",
      dataIndex: "machine_id",
      align: "center",
      key: "id",
    },
    {
      title: "Tên Máy",
      dataIndex: "machine_name",
      align: "center",
      key: "name",
    },
    {
      title: "Mã Máy",
      dataIndex: "machine_symbols",
      align: "center",
      key: "symbols",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "machine_image",
      align: "center",
      key: "image",
      render: (image) => (
        <img
          src={`${image}`}
          style={{ width: "50px", height: "auto" }}
          alt="Hình ảnh"
        />
      ),
    },
    {
      title: "Trạng Thái",
      dataIndex: "is_active",
      align: "center",
      key: "is_active",
      render: (is_active) =>
        is_active ? (
          <Tag color="green">Hoạt Động</Tag>
        ) : (
          <Tag color="red">Bảo Trì</Tag>
        ),
    },
  ];

  const handleDetail = (machine_select_id) => {
    navigate(`/machine-detail/${machine_select_id}`);
  };

  const showModal = (machineId) => {
    console.log(machineId);
    setDeleteMachineId(machineId);
    setModalVisible(true);
  };

  const handleDelete = async () => {
    try {
      await deleteItem(deleteMachineId);
      setModalVisible(false);
      reloadMachines(); // Tải lại danh sách máy sau khi xóa
    } catch (err) {
      message.error("Xóa thất bại:", err);
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
  };


  const showNewModal = () => {
    setNewModalVisible(true);
  };

  const handleNewCancel = () => {
    setNewModalVisible(false);
  };

  const handleSelectMachine = (machineId, userId) => {
    const machineExistsList = machines.some(
      (machine) => machine.machine_select_id === machineId && machine.user_select === userId
    );

    const machineExists = newMachines.some(
      (machine) => machine.machine_id === machineId
    );

    if (machineExistsList) {
      message.warning("Máy này đã có trong danh sách.");
    } else {
      if(machineExists){
        message.warning("Máy này đã có list thêm mới.");
      }else{
        const selectedMachine = machinesAll.find(
          (machine) => machine.machine_id === machineId
        );
        selectedMachine.user_id = 1;
        setNewMachines([...newMachines, selectedMachine]);
      }

    }
  };

  const handleAddMachines = async () => {
    try {
      await addMachines(newMachines);
      setNewModalVisible(false);
      reloadMachines(); // Tải lại danh sách máy sau khi thêm
      setNewMachines([]); // Xóa danh sách máy đã chọn sau khi thêm
    } catch (err) {
      message.error("Thêm mới thất bại:", err);
    }
  };

  if (loadingMachines) return <p>Loading...</p>;
  if (errorMachines)
    return <p>Error loading machines: {errorMachines.message}</p>;

  return (
    <div>
      <BreadcrumbLayout LinkSecond={'/machine'} NameSecond={'Danh Sách Máy'} />
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: "100%",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Layout className="button-con">
          <Tooltip title="Tải Lại" mouseEnterDelay={0} mouseLeaveDelay={0}>
            <Button onClick={reloadMachines}>
              <ReloadOutlined />
            </Button>
          </Tooltip>
          <Tooltip title="Thêm Mới Máy" mouseEnterDelay={0} mouseLeaveDelay={0}>
            <Button style={{ marginLeft: 10 }} onClick={showNewModal}>
              <PlusOutlined />
            </Button>
          </Tooltip>
        </Layout>
        {errorDelete && ( message.error("Lỗi khi xóa:", errorDelete.message))}
        {errorAdd && ( message.error("Lỗi khi thêm mới:", errorAdd.message))}
        <Table dataSource={machines} bordered columns={columns} rowKey="id" />
        <Modal
          title="Xác nhận xóa máy"
          visible={modalVisible}
          onOk={handleDelete}
          onCancel={handleCancel}
          okText="Xóa"
          cancelText="Hủy"
          confirmLoading={loadingDelete} // Trạng thái loading khi đang xóa
        >
          <p>Bạn có chắc chắn muốn xóa máy này?</p>
        </Modal>
        <Modal
          title="Thêm Mới Máy Sản Xuất"
          visible={newModalVisible}
          onOk={handleAddMachines}
          onCancel={handleNewCancel}
          okText="Add"
          cancelText="Cancel"
          confirmLoading={loadingAdd}
        >
          <Select
            placeholder="Chọn máy sản xuất"
            style={{ width: "100%", marginBottom: 16 }}
            onChange={(machineId) => handleSelectMachine(machineId, 1)}
          >
            {machinesAll.map((machine) => (
              <Option key={machine.machine_id} value={machine.machine_id}>
                {machine.machine_name} / {machine.machine_symbols}
              </Option>
            ))}
          </Select>
          <Table
            dataSource={newMachines}
            columns={columns_machine_select}
            rowKey="machine_select_id"
            pagination={false}
          />
        </Modal>
      </Content>
    </div>
  );
};

export default MachineList;
