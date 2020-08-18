import React, { useState } from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";
import cuid from "cuid";
import { Link } from "react-router-dom";

function EventForm({ setFormOpen, setEvents, createEvent, selectedEvent, updateEvent}) {
  const initialValues = selectedEvent ??{
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit(e) {
    e.preventDefault();

    selectedEvent ? updateEvent({...selectedEvent, ...values})
    :
    createEvent({...values, id:cuid(), hostedBy:'kaskar', attendees:[], hostPhotoURL:'/assets/user.png'});
    setFormOpen(false);
}

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the event':'Create new event'} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event Title'
            name='title'
            value={values.title}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            name='category'
            value={values.category}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={values.description}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            value={values.venue}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            name='date'
            value={values.date}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          as={Link} to='/events'
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
}

export default EventForm;
