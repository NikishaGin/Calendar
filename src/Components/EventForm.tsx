import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {IUser} from "../Models/IUser";
import {IEvent} from "../Models/IEvent";
import {useTypedSelector} from "../Hooks/useTypedSelector";
import {Moment} from "moment";
import {formatDate} from "../Utils/date";


interface EventFormProps {
    guests: IUser []
    submit: (event: IEvent) => void
}


export const EventForm: FC<EventFormProps> = (props) => {

    const [event, setEvent] = useState<IEvent>({
        author: '',
        guest: '',
        date: '',
        description: '',
    } as IEvent)

    const {user} = useTypedSelector(state => state.isAuth)

    const submitForm = () => {
        props.submit({...event, author: user.username})
    }

    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())})
        }
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[{required: true, message: 'Обязательное поле'}]}
            >
                <Input
                    onChange={e => setEvent({...event, description: e.currentTarget.value})}
                    value={event.description}
                />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[{required: true, message: 'Обязательное поле'}]}
            >
                <DatePicker onChange={(date: any) => selectDate(date)}/>
            </Form.Item>
            <Form.Item label={'Выберите гостя'} name={'guest'}>
                <Select onChange={(guest: string) => setEvent({...event, guest})}>
                    {props.guests.map(guests =>
                        <Select.Option key={guests.username} value={guests.username}>
                            {guests.username}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Row justify={'end'}>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

