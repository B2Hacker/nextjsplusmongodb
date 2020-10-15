import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader} from 'semantic-ui-react';
import { useRouter } from 'next/router';

const newNote = () => {
    const [form, setForm] = useState({ title: '', description: '' })
    
}