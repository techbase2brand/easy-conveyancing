import Link from 'next/link';
import { memo } from 'react';

const Annoucementbar = () => {
    // emain icon
    const email =((
        <svg width={14} height={15} viewBox="0 0 14 15" fill="none"xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_180_12)">
            <path d="M9.07113 8.12259L7.89861 9.38312C7.42312 9.89435 6.58652 9.90536 6.10075 9.38312L4.92817 8.12259L0.716797 12.6494C0.873559 12.7271 1.0464 12.7734 1.23015 12.7734H12.7692C12.953 12.7734 13.1257 12.7271 13.2825 12.6495L9.07113 8.12259Z"fill="white"/>
            <path d="M12.7692 2.22656H1.23009C1.04634 2.22656 0.873504 2.27291 0.716797 2.35058L5.21695 7.18816C5.21725 7.18849 5.21761 7.18854 5.21791 7.18887C5.21821 7.18919 5.21826 7.18963 5.21826 7.18963L6.68151 8.76258C6.83693 8.9291 7.16237 8.9291 7.3178 8.76258L8.78074 7.18989C8.78074 7.18989 8.7811 7.18919 8.7814 7.18887C8.7814 7.18887 8.78205 7.18849 8.78236 7.18816L13.2824 2.35055C13.1257 2.27285 12.9529 2.22656 12.7692 2.22656Z" fill="white"/>
            <path d="M0.130867 2.96519C0.0497656 3.14092 0 3.33598 0 3.54492V11.4551C0 11.664 0.0497109 11.8591 0.13084 12.0348L4.34951 7.50015L0.130867 2.96519Z" fill="white"/>
            <path d="M13.869 2.96513L9.65039 7.50014L13.869 12.0349C13.9501 11.8591 13.9999 11.6641 13.9999 11.4551V3.54492C13.9999 3.33591 13.9501 3.14086 13.869 2.96513Z"fill="white"/>
            </g><defs><clipPath id="clip0_180_12"><rect width={14} height={15} fill="white" /></clipPath></defs>
        </svg>
    ));
    // watch icon
    const watch = ((
        <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_180_27)">
            <path d="M6.49935 0.541665C5.32091 0.541665 4.16892 0.891114 3.18908 1.54582C2.20924 2.20053 1.44554 3.1311 0.99457 4.21984C0.543598 5.30858 0.425603 6.50661 0.655507 7.66241C0.88541 8.81821 1.45289 9.87989 2.28617 10.7132C3.11946 11.5465 4.18114 12.1139 5.33694 12.3438C6.49274 12.5737 7.69076 12.4558 8.77951 12.0048C9.86825 11.5538 10.7988 10.7901 11.4535 9.81027C12.1082 8.83043 12.4577 7.67844 12.4577 6.5C12.4558 4.92032 11.8275 3.40588 10.7105 2.28888C9.59347 1.17188 8.07903 0.543528 6.49935 0.541665ZM8.50731 8.50795C8.40573 8.6095 8.26798 8.66655 8.12435 8.66655C7.98072 8.66655 7.84297 8.6095 7.74139 8.50795L6.11639 6.88296C6.0148 6.7814 5.95772 6.64364 5.95769 6.5L5.95769 3.25C5.95769 3.10634 6.01475 2.96856 6.11634 2.86698C6.21792 2.7654 6.35569 2.70833 6.49935 2.70833C6.64301 2.70833 6.78079 2.7654 6.88237 2.86698C6.98395 2.96856 7.04102 3.10634 7.04102 3.25L7.04102 6.27575L8.50731 7.74204C8.60886 7.84362 8.6659 7.98137 8.6659 8.125C8.6659 8.26863 8.60886 8.40638 8.50731 8.50795Z"fill="white"/></g><defs><clipPath id="clip0_180_27"><rect width={13} height={13} fill="white" /></clipPath></defs>
        </svg>
    ));

    // telephone icon
    const telephone = ((
        <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_180_47)">
            <path d="M9.88332 8.59976C9.45861 8.18046 8.92839 8.18046 8.50638 8.59976C8.18447 8.91897 7.86255 9.23818 7.54605 9.5628C7.45948 9.65207 7.38644 9.67101 7.28094 9.61149C7.07264 9.49788 6.85082 9.4059 6.65063 9.28146C5.71735 8.69444 4.93555 7.9397 4.24302 7.09027C3.89947 6.66826 3.59378 6.2165 3.38007 5.70792C3.33679 5.60513 3.3449 5.5375 3.42877 5.45364C3.75068 5.14254 4.06448 4.82333 4.38099 4.50412C4.82193 4.06047 4.82193 3.54108 4.37828 3.09472C4.1267 2.84044 3.87512 2.59156 3.62354 2.33727C3.36384 2.07758 3.10685 1.81517 2.84445 1.55818C2.41973 1.14429 1.88952 1.14429 1.46751 1.56089C1.14289 1.8801 0.831795 2.20742 0.501763 2.52123C0.196078 2.81068 0.0418832 3.16506 0.00942112 3.57895C-0.0419773 4.25254 0.123039 4.88826 0.355684 5.50774C0.831795 6.79 1.55678 7.92887 2.43597 8.97307C3.62354 10.3852 5.04105 11.5024 6.69933 12.3086C7.44595 12.6711 8.21964 12.9497 9.06095 12.9957C9.63985 13.0281 10.143 12.8821 10.5461 12.4303C10.822 12.1219 11.1331 11.8406 11.4253 11.5457C11.8581 11.1075 11.8608 10.5772 11.4307 10.1444C10.9167 9.62773 10.4 9.11374 9.88332 8.59976Z" fill="white"/>
            <path d="M9.36601 6.44373L10.3642 6.27331C10.2073 5.35625 9.77449 4.52576 9.11713 3.8657C8.4219 3.17047 7.54272 2.73223 6.57426 2.59697L6.43359 3.60059C7.18293 3.70609 7.86463 4.04424 8.40296 4.58257C8.91154 5.09114 9.24427 5.73498 9.36601 6.44373Z" fill="white"/>
            <path d="M10.9272 2.10463C9.77475 0.952223 8.31666 0.22453 6.70708 0L6.56641 1.00362C7.95687 1.19839 9.21748 1.8287 10.213 2.8215C11.1571 3.76561 11.7766 4.95859 12.0011 6.2706L12.9993 6.10018C12.7369 4.57987 12.02 3.20023 10.9272 2.10463Z" fill="white"/>
            </g><defs><clipPath id="clip0_180_47"><rect width={13} height={13} fill="white" /></clipPath></defs>
        </svg>
    ));

    // linkdine icon
    const linkedin = ((
        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2005 16.2V10.926C16.2005 8.334 15.6425 6.354 12.6185 6.354C11.1605 6.354 10.1885 7.146 9.79253 7.902H9.75653V6.588H6.89453V16.2H9.88253V11.43C9.88253 10.17 10.1165 8.964 11.6645 8.964C13.1945 8.964 13.2125 10.386 13.2125 11.502V16.182H16.2005V16.2Z" fill="white"/>
            <path d="M2.03516 6.58801H5.02316V16.2H2.03516V6.58801Z" fill="white" />
            <path d="M3.52878 1.8C2.57478 1.8 1.80078 2.574 1.80078 3.528C1.80078 4.482 2.57478 5.274 3.52878 5.274C4.48278 5.274 5.25678 4.482 5.25678 3.528C5.25678 2.574 4.48278 1.8 3.52878 1.8Z" fill="white"/>
        </svg>
    ));

    // facebook icon
    const facebook = ((
        <svg width={17} height={15} viewBox="0 0 17 15" fill="none"xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_180_39)">
            <path d="M9.81627 15V8.1583H12.4179L12.8082 5.49117H9.81627V3.7886C9.81627 3.01665 10.0582 2.49057 11.3142 2.49057L12.9135 2.48999V0.104422C12.6369 0.072709 11.6876 0 10.5826 0C8.27515 0 6.69546 1.24272 6.69546 3.52445V5.49117H4.08594V8.1583H6.69546V15H9.81627Z" fill="white"/></g>
            <defs><clipPath id="clip0_180_39"><rect width={17} height={15} fill="white" /></clipPath></defs>
        </svg>
    ));

    // instagram icon
    const instagram = ((
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00002 5.55467C6.65069 5.55467 5.55469 6.65067 5.55469 8.00001C5.55469 9.34934 6.65069 10.448 8.00002 10.448C9.34935 10.448 10.448 9.34934 10.448 8.00001C10.448 6.65067 9.34935 5.55467 8.00002 5.55467Z"fill="white"/>
            <path d="M11.6913 1.33334H4.30998C2.66998 1.33334 1.33398 2.66934 1.33398 4.30934V11.6907C1.33398 13.3333 2.66998 14.6667 4.30998 14.6667H11.6913C13.334 14.6667 14.6673 13.3333 14.6673 11.6907V4.30934C14.6673 2.66934 13.334 1.33334 11.6913 1.33334ZM8.00065 12.32C5.61932 12.32 3.68065 10.3813 3.68065 8C3.68065 5.61867 5.61932 3.68267 8.00065 3.68267C10.382 3.68267 12.3207 5.61867 12.3207 8C12.3207 10.3813 10.382 12.32 8.00065 12.32ZM12.4113 4.46667C11.9073 4.46667 11.4967 4.05867 11.4967 3.55467C11.4967 3.05067 11.9073 2.64 12.4113 2.64C12.9153 2.64 13.326 3.05067 13.326 3.55467C13.326 4.05867 12.9153 4.46667 12.4113 4.46667Z"fill="white"/>
        </svg>
    ));

    // youtube icon
    const youtube = ((
        <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_180_42)">
            <path d="M17.082 4.5165C16.8875 3.83373 16.3175 3.29551 15.5947 3.11166C14.2742 2.77042 8.99198 2.77042 8.99198 2.77042C8.99198 2.77042 3.71 2.77042 2.38947 3.09872C1.68055 3.28237 1.09666 3.83382 0.902199 4.5165C0.554688 5.76356 0.554688 8.34981 0.554688 8.34981C0.554688 8.34981 0.554688 10.9491 0.902199 12.1831C1.09686 12.8658 1.66664 13.404 2.38958 13.5879C3.7239 13.9292 8.99219 13.9292 8.99219 13.9292C8.99219 13.9292 14.2742 13.9292 15.5947 13.6009C16.3176 13.4171 16.8875 12.8789 17.0822 12.1962C17.4296 10.9491 17.4296 8.36294 17.4296 8.36294C17.4296 8.36294 17.4435 5.76356 17.082 4.5165ZM7.31025 10.7391V5.96054L11.7027 8.34981L7.31025 10.7391Z"fill="white"/></g>
            <defs><clipPath id="clip0_180_42"><rect width={18} height={17} fill="white" /></clipPath></defs>
        </svg>
    ));
    
    // divider icon
    const divider = ((
        <svg width={2} height={25} viewBox="0 0 2 25" fill="none"xmlns="http://www.w3.org/2000/svg">
            <rect width="1.21759" height="24.8387" fill="#D9D9D9" />
        </svg>
    ));

  return (
    <div className="bg-primary text-white py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center justify-between w-full">

                {/* desktop  */}
                <div className='hidden md:flex users-details flex items-center space-x-3 text-xs'>
                    <Link href="mailto:info@eazyconveyancing.com.au" title='email' aria-label='email' className='flex items-center gap-2'>
                        {email} info@eazyconveyancing.com.au
                    </Link>
                    {divider}
                    <Link href="https://www.eazyconveyancing.com.au/office-locations/" title='office location' aria-label='office location' className='flex items-center gap-2'>
                        {watch} Mon - Sun : 9:00 AM - 5:00 PM
                    </Link>
                    {divider}
                    <Link href="tel:0433 101 353" title='phone' aria-label='phone' className='flex items-center gap-2'>
                        {telephone} Call 0433 101 353 
                    </Link>
                </div>
                {/* mobile  */}
                <div className='flex md:hidden users-details flex items-center space-x-3 text-xs'>
                    <Link href="tel:0433 101 353" title='phone' aria-label='phone' className='flex items-center gap-2'>
                        {telephone} Call 0433 101 353 
                    </Link>
                 </div>
                <div className='social-media flex items-center space-x-3'>
                    <Link href="https://www.linkedin.com/company/eazy-conveyancing" title='linkedin' aria-label='linkedin' target="_blank">
                        {linkedin}
                    </Link>
                    <Link href="https://www.facebook.com/eazyconveyancing" title='facebook' aria-label='facebook' target="_blank">
                        {facebook}
                    </Link>
                    <Link href="https://www.instagram.com/eazyconveyancing" title='instagram' aria-label='instagram' target="_blank">
                        {instagram}
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCXQ5n24f5J1J1J1J1J1J1J1" title='youtube' aria-label='youtube' target="_blank">
                        {youtube}
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default memo(Annoucementbar);