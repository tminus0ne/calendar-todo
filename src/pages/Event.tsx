import { Button, Modal, Row } from 'antd';
import React from 'react';

import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Event: React.FC = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const { fetchGuests } = useActions();
    const { guests } = useTypedSelector(state => state.event);

    React.useEffect(() => {
        fetchGuests();
    }, []);

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
                <EventForm 
                    guests={guests}
                />
            </Modal>
        </div>
    );
};

export default Event;