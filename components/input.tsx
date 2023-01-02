import axios from 'axios';
const qs = require('qs')
import { useState, ChangeEvent, MouseEvent } from 'react';
import { useSession } from "next-auth/react"
import { GpTs } from 'gpts';
 
export default function InputBox() {
    const { data: session, status } = useSession()
    const [playlistPrompt, setPlaylistPrompt] = useState<string>('');
    

    function handlePlaylistPromptChange(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setPlaylistPrompt(event.target.value);
      }
    
    async function handlePlaylistCreation(event: MouseEvent) {
    event.preventDefault();
    const brain = new GpTs("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");
    const thoughts = await brain.completion({
        engineId: "text-davinci-003",
        max_tokens: 500,
        prompt: playlistPrompt,
    });
    console.log(thoughts.choices[0].text);
    }
    return (
    <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
        </label>
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={playlistPrompt} onChange={handlePlaylistPromptChange}/>
        <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded-full disabled:opacity-50" onClick={handlePlaylistCreation} disabled ={session ? false:true}>
            Preview
        </button>
    </div>
    );
}