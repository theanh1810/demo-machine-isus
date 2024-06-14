import { Layout, Row, Card, Col , Spin, Alert, Segmented } from "antd";
import { useParams } from 'react-router-dom';
import useFetchMachineDetail from '../../hooks/Machine/useFetchDetailMachine';
import BreadcrumbLayout from "../UI/BreadcrumbLayout/BreadcrumbLayout";
import SegmentedLayout from "../UI/BreadcrumbLayout/SegmentedLayout";
import React, { useState } from 'react';
const { Content } = Layout;

const MachineDetail = ({
  colorBgContainer,
  borderRadiusLG,
}) => {
    const { machine_select_id } = useParams();
    const { machineDetail, loading, error } = useFetchMachineDetail(machine_select_id);
    if (loading) return <Spin size="large" />;
    if (error) return <Alert message="Error" description={error.message} type="error" showIcon />;
    console.log(machineDetail);
  return (
    <div>
      <BreadcrumbLayout
        LinkSecond={"/machine"}
        NameSecond={"Danh Sách Máy"}
        LinkThird={`/machine-detail/${machine_select_id}`}
        NameThird={`Chi Tiết Máy - ID: ${machine_select_id}`}
      />
      <SegmentedLayout machine_select_id={machine_select_id} />
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: "100%",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Card className="machine-detail-card">
          <Row>
            <Col span={8}>
              <div className="machine-image-container">
                <img
                  src={''}
                  className="machine-image"
                />
              </div>
            </Col>
            <Col span={16}>
              <div className="machine-info-container">
                <h2 className="machine-name">{machineDetail.machine_name}</h2>
                <p className="machine-symbols">
                  Mã Máy: {machineDetail.machine_symbols}
                </p>
                {/* Bạn có thể thêm nhiều thông tin hơn tại đây */}
              </div>
            </Col>
          </Row>
        </Card>
      </Content>
    </div>
  );
};

export default MachineDetail;
