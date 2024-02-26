import React from 'react';
import {ReactComponent as ChatBoxProfileIcon} from '../assets/chat-box-profile-icon.svg';
import {ReactComponent as ChatBoxExpandIcon} from '../assets/chat-box-expand-icon.svg';
import {ReactComponent as ChatBoxMinimizeIcon} from '../assets/chat-box-minimize-icon.svg';
import {ReactComponent as ChatBoxCollapseIcon} from '../assets/chat-box-collapse-icon.svg';
import {ReactComponent as ChatBoxCameraIcon} from '../assets/chat-box-camera-icon.svg';
import {ReactComponent as ChatBoxSendMessageIcon} from '../assets/chat-box-send-message-icon.svg';

const ChatBoxComponent = ({setShowChatBox}) => {
    const onCollapseClick = () => {
        setShowChatBox(false)
    }
  return (
    <div className='absolute w-[40%] right-10 -top-80 z-30'>
        <div className='px-6 pt-3 pb-6 bg-[#FF9606] flex justify-between'>
            <div className='flex relative'>
                <div className='absolute -top-7 -left-2 px-4 py-4 rounded-[100%] border-2 border-[#FF9606] bg-white'>
                    <ChatBoxProfileIcon className='h-9 w-9'/>
                </div>
                <div className='ml-20'>
                    <p className='text-white text-lg font-semibold'>Zakat Chain</p>
                    <p className='text-white text-sm'>Chat Box [Online]</p>
                </div>
            </div>
            <div className='flex gap-x-4 pt-1'>
                <span className='cursor-pointer'><ChatBoxExpandIcon className='h-4 w-4'/></span>
                <span className='cursor-pointer'><ChatBoxMinimizeIcon className='h-4 w-4'/></span>
                <span className='cursor-pointer' onClick={onCollapseClick}><ChatBoxCollapseIcon className='h-4 w-4'/></span>
            </div>
        </div>
        <div className='bg-white px-10 pt-10 pb-28 border-b border-black'>
            <p className='text-center'>
                We are here to help make your experience here
                on Zakat Chain, seamless. Ask Us anything.
            </p>
        </div>
        <div className='px-6 py-3 bg-white flex border-b rounded-b-xl'>
            <div className='self-center mr-8'>
                <ChatBoxCameraIcon className='h-5 w-5'/>
            </div>
            <div className=''>
                <form>
                    <textarea type='text' cols={40} rows={1} className='resize-none focus:outline-none' placeholder='Type your message here...'>
                    </textarea>
                </form>
            </div>
            <div className='self-center ml-auto'>
                <ChatBoxSendMessageIcon className='h-5 w-5'/>
            </div>
        </div>
    </div>
  )
}

export default ChatBoxComponent;