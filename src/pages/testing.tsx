import { Button } from '../components/atoms/_index'

export default function Testing() {
    return (
        <div>
            <h1 className='text-danger'>Testing Page</h1>
            <Button color="secondary"  text="fasdfasdf" onClick={() => console.log("zyxwvutsrqponmlkjihgfedcba")}/>

            <Button color="danger" text="ewtwertwert"  onClick={() => console.log("abcdefghijklmnopqrstuvwxyz")}/>
            <Button color="primary" text="ewtwertwert"  onClick={() => console.log("abcdefghijklmnopqrstuvwxyz")}/>

        </div>
    );
}
