import { Button, Modal, Row } from 'antd';
import React from 'react';

import EventCalendar from '../components/EventCalendar';

const Event: React.FC = () => {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <div>
            <EventCalendar events={[]} />
            <Row justify="center">
                <Button
                onClick={() => setModalVisible(true)}
                >
                    Add event
                </Button>
            </Row>
            <Modal
            title="Add event"
            visible={modalVisible}
            footer={null}
            onCancel={() => setModalVisible(false)}
            >

            </Modal>
        </div>
    );
};

export default Event;