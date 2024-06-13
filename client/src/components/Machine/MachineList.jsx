import { useState } from 'react';
import { Table, Tag, Button, Layout, Tooltip, Modal, Flex } from 'antd';
import { ReloadOutlined, PlusOutlined } from '@ant-design/icons';
import useFetchMachines from '../../hooks/Machine/useFetchMachines';
import useDeleteItem from '../../hooks/UI/useDeleteItem';
import './Machine.css';

const MachineList = () => {
  const { machines, loadingMachines, errorMachines, reloadMachines } = useFetchMachines();
  const { loadingDelete, errorDelete, deleteItem } = useDeleteItem();
  const [deleteMachineId, setDeleteMachineId] = useState(null); // Di chuyển khởi tạo xuống đây

  const [modalVisible, setModalVisible] = useState(false);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'machine_select_id',
      align: 'center',
      key: 'id',
    },
    {
      title: 'Tên Máy',
      dataIndex: 'machine_select_name',
      align: 'center',
      key: 'name',
    },
    {
      title: 'Mã Máy',
      dataIndex: 'machine_select_symbols',
      align: 'center',
      key: 'symbols',
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'machine_select_image',
      align: 'center',
      key: 'image',
      render: image => <img src={`${image}`} style={{ width: '50px', height: 'auto' }} alt="Hình ảnh" />,
    },
    {
      title: 'Trạng Thái',
      dataIndex: 'is_active',
      align: 'center',
      key: 'is_active',
      render: is_active => (is_active == true ? <Tag color="green">Hoạt Động</Tag> : <Tag color="red">Bảo Trì</Tag>),
    },
    {
      title: 'Thao Tác',
      key: 'action',
      align: 'center',
      render: (text, record) => (
        <>
          <Button type="primary" style={{ marginRight: 8 }} onClick={() => handleDetail(record)}>
            Chi Tiết
          </Button>
          <Button type="primary" danger onClick={() => showModal(record.id)}>
            Xóa
          </Button>
        </>
      ),
    },
  ];

  const handleDetail = record => {
    console.log('Chi tiết của máy:', record);
  };

  const showModal = machineId => {
    setDeleteMachineId(machineId);
    setModalVisible(true);
  };

  const handleDelete = async () => {
    try {
      await deleteItem(deleteMachineId);
      setModalVisible(false);
      reloadMachines(); // Tải lại danh sách máy sau khi xóa
    } catch (err) {
      console.error('Xóa thất bại:', err);
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  if (loadingMachines) return <p>Loading...</p>;
  if (errorMachines) return <p>Error loading machines: {errorMachines.message}</p>;

  return (
    <div>
      <Layout className="button-con">
        <Tooltip title="Tải Lại" mouseEnterDelay={0} mouseLeaveDelay={0}>
          <Button onClick={reloadMachines}>
            <ReloadOutlined />
          </Button>
        </Tooltip>
        <Tooltip title="Thêm Mới Máy" mouseEnterDelay={0} mouseLeaveDelay={0}>
          <Button style={{ marginLeft: 10 }}>
            <PlusOutlined />
          </Button>
        </Tooltip>
      </Layout>
      <Layout style={{ background: 'red', display: Flex, alignItems: 'center' }}>{errorDelete && <p style={{ color: 'white' }}>Lỗi khi xóa: {errorDelete.message}</p>}</Layout>
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
    </div>
    
  );
};

export default MachineList;
