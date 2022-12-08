import React, {useEffect, useState} from 'react';
import {EventCalendar} from "../Components/EventCalendar";
import {Button, Layout, Modal, Row} from "antd";
import {EventForm} from "../Components/EventForm";
import {useActions} from "../Hooks/useActions";
import {useTypedSelector} from "../Hooks/useTypedSelector";


export const Event = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const {fetchGuests, createEvent, fetchEvents} = useActions()
    const {guest,events} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.isAuth)

    useEffect(()=> {
        fetchGuests()
        fetchEvents(user.username)
    }, [])

    return (
        <Layout>
            <EventCalendar events={events}/>
            <Row justify='center'>
                <Button onClick={()=>setModalVisible(true)}>Добавить событие</Button>
            </Row>
            <Modal title={'Добавить событие'}
                   visible={modalVisible}
                   footer={null}
                   onCancel={()=>setModalVisible(false)}
            >
                <EventForm guests={guest}
                           submit={event => createEvent(event)}
                />
            </Modal>
        </Layout>
    );
};

