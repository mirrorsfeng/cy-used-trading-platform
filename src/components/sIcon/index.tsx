import React, { memo } from 'react'

const SIcon = memo(({ stand } : { stand: string }) => {
    switch (stand) {
        case 'headerLeft':
            return (
                <svg t="1644915504119" 
                    class="icon" 
                    viewBox="0 0 1024 1024" 
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    p-id="3637" width="50" height="50">
                <path d="M203.9 453v377c0.2 14.9 6.1 29.1 16.6 39.6 10.4 10.7 24.7 16.8 39.7 16.9h510.2c14.9-0.1 29.2-6.2 39.7-16.9 10.5-10.5 16.4-24.8 16.6-39.6V453H203.9z m89.8 132.8c3-2.5 7.6-3.8 14-3.8h173.1c6.7 0 11.5 1.3 14.5 3.8 2.6 2.3 4 7 3.9 14 0 5.8-1.1 10.1-3.4 13-3.3 4-8.3 5.9-15 5.9H307.7c-6.1 0-10.8-1.4-14-4.3-3-2.7-4.5-7.6-4.5-14.6 0-6.8 1.5-11.4 4.5-14z m211.4 179c-3.3 4-8.3 5.9-15 5.9H297.4c-6.2 0-10.8-1.5-14-4.6-3-2.5-4.5-7.3-4.5-14.3 0-7.4 1.5-12.3 4.5-14.8 3-2.8 7.6-4.3 14-4.3H490c6.7 0 11.5 1.4 14.5 4.3 2.6 2.5 3.9 7.5 3.9 14.8 0.1 5.8-1 10.2-3.3 13zM776 715.4c-3 3.8-7.7 5.7-14.2 5.7H698c-0.5 29.7-4.9 49.5-13.2 59.4-9.3 11.2-23.5 16.7-42.4 16.7-26.5-0.7-46.5-5-59.8-12.7-6-3.1-9.1-8.4-9.2-15.9 0-5.4 1.2-9.9 3.7-13.5 2.6-3.4 5.9-5.2 9.8-5.4 5.3 0 12.6 1.7 21.9 5.1 13.2 3.6 23.4 5.4 30.6 5.4 9.5 0 15.5-3.1 17.9-9.2 1.4-3.2 2.3-13.2 2.6-30h-106c-5.8 0-10.3-1.3-13.4-4-2.6-2.5-4-7.1-4-13.8 0-6.5 1.3-10.9 4-13.2 2.8-2.5 7.3-3.8 13.4-3.8h104.6c-0.9-8.3-2.1-17-3.7-26.2h-95.7c-5.6 0-9.8-1.4-12.6-4.1-2.6-2.3-4-6.7-4-13 0-5.9 1.3-10.1 4-12.4 2.6-2.2 6.8-3.2 12.6-3.2h89.3c-2.1-9.2-4.4-17.9-6.9-26.2-33.7 3.4-60.3 5.1-79.6 5.1-10.2 0-15.3-6.4-15.3-19.2 0.2-8.3 4.9-12.8 14.2-13.5 66.9-2.7 126.5-9.4 178.7-20.3 3.9-0.6 7.9-1 11.9-1.1 4.1-0.1 7.9 1.8 10.3 5.1 2.8 3.3 4.3 7.5 4.2 11.9 0 7.7-3.8 12.7-11.3 14.9-23.2 5.2-48.7 9.5-76.7 13 3 10.4 5.6 20.5 7.9 30.2h70.9c6 0 10.2 1.2 12.6 3.5 2.5 2 3.7 6 3.7 12.2 0 5.2-1 9.1-2.9 11.6-3 3.6-7.5 5.4-13.4 5.4h-64c1.6 9.2 2.8 17.9 3.7 26.2h65.4c6.3 0 10.9 1.4 13.7 4.1 2.5 2 3.7 6.3 3.7 13 0 5.5-1.1 9.5-3.2 12.2z" fill="#515151" p-id="3638">
                </path><path d="M923.8 330.7h0.7l-4.9-5.1c-7.4-7.7-17.3-12-28-12.3h-73.4l-29.7-101c-0.1-1.8-0.7-2.9-1.4-3.6-5.8-19.6-21.6-34.3-41.6-38.5-19-3.6-38.6-2-56.7 4.8-2.3 0.4-4.6 1-6.8 1.9l-87 30.7-138-82.1c-1.5-1.3-3.2-2.3-5.1-3-22.5-13.7-49.8-17.2-75-9.6-26 6.5-48.1 22.6-62.4 45.3-1.7 1.8-3 3.8-4 6.1l-85.7 149h-85.9c-10.6 0.2-20.5 4.6-27.9 12.2-7.6 7.6-11.8 17.7-11.9 28.5v61.4c0.5 22.3 18 40.1 39.9 40.5h39.4V830c0.3 22.5 9.1 43.6 24.9 59.6 15.7 15.5 36.4 24.1 58.4 24.4H772c22 0 42.7-8.7 58.3-24.5 15.7-15.8 24.5-37 24.7-59.5V456h36.7c21.8-0.4 39.3-18.2 39.8-40.6V354c-0.2-8.5-2.9-16.5-7.7-23.3zM692.1 205.4c1.9-0.3 3.8-1 5.4-2.2 13.3-4.7 27.5-5.6 41.3-2.5h0.1c9.7 1.8 17.6 8.8 20.6 18.1v1.9l27.6 92.6h-15.5l-143.2-85.8 63.7-22.1z m-129.6 18.4l150.3 89.5h-269l68.8-120 49.9 30.5z m-226.6-44l1.5-1.5v-1.1c0.3-0.4 0.5-0.8 0.6-1.2 0.1-0.3 0.2-0.5 0.3-0.6 0.6-0.5 1.2-1.2 1.7-1.9h2v-2.9c10.3-13.4 24.8-23.1 41.2-27.4 19.4-5.6 40.4-2.6 57.5 8.1l44.7 30.4-76.1 131.8h-150l76.6-133.7zM823.5 830c-0.2 14.2-5.8 27.5-15.8 37.6-9.8 10.1-23.5 15.9-37.5 16H260.1c-14.1-0.1-27.7-5.9-37.6-16.1-10-10-15.5-23.4-15.7-37.5V456h616.7v374z m78-414.7c-0.2 2.7-1.2 5.2-2.8 7.3-2.1 1.7-4.5 2.7-7.2 3H138.9c-2.7-0.2-5.1-1.2-7.2-3-1.7-2.1-2.6-4.6-2.8-7.3v-61.1c0.2-2.7 1.2-5.3 2.8-7.4 2.1-1.6 4.6-2.6 7.2-2.8h752.5c2.6 0.2 5.1 1.2 7.2 2.8 1.6 2.2 2.6 4.7 2.8 7.4v61.1z" fill="#515151" p-id="3639"></path><path d="M328.5 262.1l58.8 30.9 13.8-26.8-58.8-31.1zM438.1 199.3l-58.8-32.1-14.9 26.9 58.8 32.2z" fill="#515151" p-id="3640"></path></svg>
            )
        case 'userIcon':
            return (
                <svg t="1644916368889" 
                     class="icon" 
                     viewBox="0 0 1024 1024" 
                     version="1.1" 
                     xmlns="http://www.w3.org/2000/svg" 
                     p-id="4438" width="30" height="30">
                <path d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 160c70.4 0 128 57.6 128 128s-57.6 128-128 128-128-57.6-128-128 57.6-128 128-128z m236.8 507.733333c-23.466667 32-117.333333 100.266667-236.8 100.266667s-213.333333-68.266667-236.8-100.266667c-8.533333-10.666667-10.666667-21.333333-8.533333-32 29.866667-110.933333 130.133333-187.733333 245.333333-187.733333s215.466667 76.8 245.333333 187.733333c2.133333 10.666667 0 21.333333-8.533333 32z" p-id="4439"></path>
                </svg>
            )
        case 'more': 
            return (
                <svg t="1647593153987" 
                     class="icon" 
                     viewBox="0 0 1024 1024" 
                     version="1.1" 
                     xmlns="http://www.w3.org/2000/svg" 
                     p-id="2358" width="13" height="13">
                    <path d="M492.675886 904.817574L885.696074 511.797385 492.675886 118.777197c-12.258185-12.258185-12.432147-32.892131 0.187265-45.51052 12.707416-12.707416 32.995485-12.703323 45.511543-0.187265l411.660734 411.660734c7.120165 7.120165 10.163477 17.065677 8.990768 26.624381 1.500167 9.755178-1.5104 20.010753-8.990768 27.491121L538.374694 950.515359c-12.258185 12.258185-32.892131 12.432147-45.511543-0.187265-12.707416-12.707416-12.703323-32.995485-0.187265-45.51052z" p-id="2359">
                        </path>
                        </svg>
            )
            
        case 'chat': 
                return (
                    <svg t="1648791781104" 
                        class="icon" 
                        viewBox="0 0 1024 1024" 
                        version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        p-id="2267" width="25" height="25"><path d="M507.904 60.416q93.184-1.024 175.104 33.792t143.872 94.72 97.792 141.312 36.864 174.592q1.024 88.064-30.208 165.888t-87.04 137.728-131.072 98.816-162.304 48.128q-22.528 3.072-48.128 5.12t-56.832 3.072-69.632 0-86.528-6.144q-106.496-10.24-158.208-26.624t-41.472-18.432q54.272-9.216 93.184-29.696 20.48-11.264 16.896-32.256t-19.968-39.424q-52.224-57.344-84.48-133.632t-34.304-164.352q-1.024-93.184 33.792-175.104t95.232-143.36 142.336-97.28 175.104-36.864zM707.584 510.976q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568-18.944-45.056-45.568-18.432-45.056 18.432-18.432 45.056zM450.56 510.976q0 26.624 19.456 46.08t46.08 19.456q27.648 0 46.592-19.456t18.944-46.08q0-27.648-18.944-46.592t-46.592-18.944q-26.624 0-46.08 18.944t-19.456 46.592zM196.608 509.952q0 26.624 18.944 46.08t45.568 19.456q27.648 0 46.592-19.456t18.944-46.08-18.944-45.568-46.592-18.944q-26.624 0-45.568 18.944t-18.944 45.568z" p-id="2268">
                        </path>
                        </svg>
                )

        case 'isCollect':
                return (
                    <svg t="1648792048549" 
                        class="icon" 
                        viewBox="0 0 1024 1024" 
                        version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        p-id="3071" width="25" height="25"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z" p-id="3072">
                        </path>
                        </svg>
                )
        
        case 'noCollect': 
                return (
                    <svg t="1648792158650" 
                        class="icon" 
                        viewBox="0 0 1024 1024" 
                        version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        p-id="3503" width="25" height="25"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z" p-id="3504">
                        </path>
                        </svg>
                )
        default:
            break;
    }
  return (
    <div></div>
  )
})

export default SIcon