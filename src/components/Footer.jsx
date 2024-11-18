import React from 'react'

function Footer() {
    return (
        <footer className='flex flex-col items-center bg-primary-dark text-white justify-center'>
            <div className='flex flex-col items-center py-8 w-[80vw] border-b-[1px] border-white border-solid'>
                <p className='font-semibold text-lg'>Гарантирано сигурно плащане с:</p>
                <div className='grid grid-cols-4 gap-2 justify-center md:flex md:flex-row'>
                    <img width='80' src='https://cocosolis.com//wp-content/uploads/icon-payments-visa.svg' />
                    <img width='80' src='https://cocosolis.com//wp-content/uploads/icon-payments-mastercard.svg' />
                    <img width='80' src='https://cocosolis.com//wp-content/uploads/icon-payments-discover.svg' />
                    <img width='80' src='https://cocosolis.com//wp-content/uploads/icon-payments-paypal.svg' />
                    <img width='80' src='https://cocosolis.com//wp-content/uploads/icon-payments-amex.svg' />
                    <img width='80' src='https://cocosolis.com//wp-content/uploads/icon-payments-gpay.svg' />
                    <img width='80' src='https://cocosolis.com//wp-content/uploads/icon-payments-apple-pay.svg' />
                </div>
            </div>
            <div className='flex flex-col gap-12 w-[80vw] my-16 sm:flex-row'>
                <div className='flex flex-col gap-2 flex-[2] text-sm'>
                    <p className='text-xl font-normal'>Полезни връзки:</p>
                    <p>Продукти</p>
                    <p>CLUB</p>
                    <p>Контакти</p>
                    <p>За нас</p>
                    <p>Правила за закупуване</p>
                    <p>Условия за ползване на сайта</p>
                    <p>Условия на Програма за лоялност</p>
                    <p>Политика за бисквитки</p>
                    <p>Политика за връщане</p>
                    <p>Политика за защита на лични данни</p>
                </div>
                <div className='flex flex-col gap-4 justify-start flex-[3]'>
                    <h2 className='text-lg font-[300]'>Нека бъдем приятели! Абонирайте се, за да бъдете сред първите, които ще научат за нашите нови продукти и промоции:</h2>
                    <form className="w-full flex flex-col gap-1 items-start">
                        <input className="w-full p-2 text-primary-dark italic" placeholder="твоят имейл адрес" />
                        <small className="italic">Моля, поставете отметка в квадратчето по-долу, за да можете да се присъедините.</small>
                        <div className="flex flex-row gap-2">
                            <input className="size-4 checked:bg-primary-light" type="checkbox" />
                            <p className='font-light text-[0.75rem]'>Съгласен/на съм предоставеният от мен имейл да бъде използван, за да получавам известия за новости, подаръци и бъдещи промоции, свързани с продуктите COCOSOLIS, съгласно&nbsp;
                                <a className='underline'>Общите условия за ползване на сайта</a>
                                &nbsp;и&nbsp;
                                <a className='underline'>Общите условия за ползване на сайта</a>
                                . *
                            </p>
                        </div>
                    </form>
                    <button className="bg-primary-light w-full py-3">
                        ВЛЕЗ В КЛУБА
                    </button>
                </div>
                <div className='flex flex-col items-start justify-start flex-[2] gap-4'>
                    <strong>Последвайте ни</strong>
                    <div className='flex flex-row gap-4'>
                        <img width='32' src='https://cocosolis.com//wp-content/uploads/icon-social-media-facebook-footer-v0401.svg'/>
                        <img width='32' src='https://cocosolis.com//wp-content/uploads/icon-social-media-instagram-footer-v0401.svg'/>
                        <img width='32' src='https://cocosolis.com//wp-content/uploads/icon-social-media-tik-tok-footer-v0401.svg'/>
                    </div>
                    <p>Тагни ни и има шанс да видиш <strong>своята снимка или видео</strong> в профила ни!<strong> #cocosolis</strong></p>
                </div>
            </div>
            <div className='border-t-[1px] border-solid border-white w-[80vw] py-12 text-center'>
                © 2016 - 2024 COCOSOLIS | All rights reserved
            </div>
        </footer>
    )
}

export default Footer