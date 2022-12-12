import { useState, ChangeEvent, MouseEvent } from 'react';
import { GpTs } from 'gpts';
 
export default function InputBox() {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [playlistPrompt, setPlaylistPrompt] = useState<string>('');

    function handlePlaylistPromptChange(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setPlaylistPrompt(event.target.value);
      }
    async function handlePlaylistCreation(event: MouseEvent) {
    event.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
        const brain = new GpTs("");
        const thoughts = await brain.completion({
            engineId: "text-davinci-003",
            prompt: playlistPrompt,
        });
        console.log(thoughts.choices[0].text);
        setErrorMessage('There was an error signing in');
        setLoading(false);
    } catch (err) {
        // Remediation logic
        setErrorMessage('There was an error signing in');
        setLoading(false);
    }
    }
    return (
    <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
        </label>
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={playlistPrompt} onChange={handlePlaylistPromptChange}/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handlePlaylistCreation}>
            Create
        </button>
    </div>
    );
}