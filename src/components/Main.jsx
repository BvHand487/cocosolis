import Icon from "./Icon"
import Product from "./Product"
import Comment from "./Comment"
import React from 'react'

function Main() {
    return (
        <main>
            <section className='w-full h-[80vh] flex flex-col'>
                <div className="flex-1 bg-primary-lighter flex flex-col items-center justify-center gap-1">
                    <img className="hidden sm:block" src="https://placehold.co/740x120" />
                    <p className="text-[3rem] font-bold text-[#664164] tracking-[0.3rem] text-center">BLACK FRIDAY</p>
                    <button className="bg-[#664164] text-[1.4rem] py-2 px-[16vw] text-primary-lighter">ПАЗАРУВАЙ</button>
                </div>
                <div className="bg-[#664164] text-white flex flex-row gap-1 font-extralight text-xs py-1 justify-center">
                    <p>* Промоцията е валидна до изчерпване на количествата.</p>
                    <p className="underline hover:cursor-pointer">Запознай се с пълните условия.</p>
                </div>
            </section>

            <section className="flex flex-col gap-8 bg-[#FBF1EB]">
                <h1 className="text-center mt-10 text-primary-dark text-5xl font-thin">
                    ПРОМО ПАКЕТИ
                </h1>

                <div className="mb-16 m-auto w-[80vw]">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
                        <Product
                            title='DREAM HAIR'
                            subtitle='Трансформирайте косата си натурално'
                            description=''
                            starCount={5}
                            price={100}
                        />

                        <Product
                            title='DREAM HAIR'
                            subtitle='Трансформирайте косата си натурално'
                            description=''
                            starCount={5}
                            price={100}
                        />

                        <Product
                            title='DREAM HAIR'
                            subtitle='Трансформирайте косата си натурално'
                            description=''
                            starCount={5}
                            price={100}
                        />

                        <Product
                            title='DREAM HAIR'
                            subtitle='Трансформирайте косата си натурално'
                            description=''
                            starCount={5}
                            price={100}
                        />

                        <Product
                            title='DREAM HAIR'
                            subtitle='Трансформирайте косата си натурално'
                            description=''
                            starCount={5}
                            price={100}
                        />

                        <Product
                            title='DREAM HAIR'
                            subtitle='Трансформирайте косата си натурално'
                            description=''
                            starCount={5}
                            price={100}
                        />
                    </div>
                </div>

                <div className="mt-4 mb-16 m-auto">
                    <a className="w-full text-center underline text-primary-dark hover:text-primary-light cursor-pointer">РАЗГЛЕДАЙ ОЩЕ</a>
                </div>
            </section>

            <section className="flex flex-col gap-12 justify-around">
                <div className="text-center mt-10 text-primary-dark text-5xl font-thin">
                    <h1>КОСА</h1>
                    <p className="text-sm">Натурални продукти за силна, гъста и бляскава коса</p>
                </div>

                <div className="mb-16 w-[80vw] m-auto">
                    <div className="grid grid-cols-2 gap-x-12">
                        <Product
                            title='GROW'
                            subtitle='Hair Growth Serum Spray'
                            description='Спрей серум за бърз растеж на косата. Намалява косопада. За видимо по-гъста и силна коса.'
                            starCount={5}
                            price={59}
                        />

                        <Product
                            title='GROW'
                            subtitle='Hair Growth Serum Spray'
                            description='Спрей серум за бърз растеж на косата. Намалява косопада. За видимо по-гъста и силна коса.'
                            starCount={5}
                            price={59}
                        />
                    </div>
                </div>
            </section>

            <section className="h-[40px] bg-primary-dark">
                <ul className="flex flex-row w-full h-full gap-6 justify-around items-center text-white font-bold">
                    <li>VANITY FAIR</li>
                    <li>МЕДИИТЕ ГОВОРЯТ ЗА НАС</li>
                    <li>COSMOPOLITAN</li>
                    <li>VOGUE</li>
                    <li>ELLE</li>
                    <li>marie claire</li>
                    <li>InStyle</li>
                    <li>Grazia</li>
                    <li>Forbes</li>
                </ul>
            </section>

            <section className="flex flex-col gap-12 justify-around">
                <div className="text-center mt-10 text-primary-dark text-5xl font-thin">
                    <h1>КОЖА</h1>
                    <p className="text-sm">Серията SKIN за перфектна кожа, без несъвършенства.</p>
                </div>

                <div className="mb-16 w-[80vw] m-auto">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
                        <Product
                            title='SKIN'
                            subtitle='Anti-Cellulite Dry Oil'
                            description='Анти-целулитно сухо масло. Ремоделира и оформя силуета.'
                            starCount={5}
                            price={45}
                        />

                        <Product
                            title='SKIN'
                            subtitle='Anti-Cellulite Dry Oil'
                            description='Анти-целулитно сухо масло. Ремоделира и оформя силуета.'
                            starCount={5}
                            price={45}
                        />

                        <Product
                            title='SKIN'
                            subtitle='Anti-Cellulite Dry Oil'
                            description='Анти-целулитно сухо масло. Ремоделира и оформя силуета.'
                            starCount={5}
                            price={45}
                        />

                        <Product
                            title='SKIN'
                            subtitle='Anti-Cellulite Dry Oil'
                            description='Анти-целулитно сухо масло. Ремоделира и оформя силуета.'
                            starCount={5}
                            price={45}
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-12 justify-around bg-[#FBF1EB]">
                <div className="text-center mt-10 text-primary-dark text-5xl font-thin">
                    <h1>ЛИЦЕ</h1>
                    <p className="text-sm">Високоефективни натурални продукти за подмладена и сияйна кожа</p>
                </div>

                <div className="mb-16 w-[80vw] m-auto">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
                        <Product
                            title='ROSE'
                            subtitle='Filler-Effect Hyaluron Supreme'
                            description='Серум за лице за ултра хидратация с 8 вида хиалуронова киселина'
                            starCount={4}
                            price={38}
                        />

                        <Product
                            title='ROSE'
                            subtitle='Filler-Effect Hyaluron Supreme'
                            description='Серум за лице за ултра хидратация с 8 вида хиалуронова киселина'
                            starCount={4}
                            price={38}
                        />

                        <Product
                            title='ROSE'
                            subtitle='Filler-Effect Hyaluron Supreme'
                            description='Серум за лице за ултра хидратация с 8 вида хиалуронова киселина'
                            starCount={4}
                            price={38}
                        />

                        <Product
                            title='ROSE'
                            subtitle='Filler-Effect Hyaluron Supreme'
                            description='Серум за лице за ултра хидратация с 8 вида хиалуронова киселина'
                            starCount={4}
                            price={38}
                        />

                        <Product
                            title='ROSE'
                            subtitle='Filler-Effect Hyaluron Supreme'
                            description='Серум за лице за ултра хидратация с 8 вида хиалуронова киселина'
                            starCount={4}
                            price={38}
                        />

                        <div>
                            <img src="https://placehold.co/400x680" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-12 justify-around">
                <div className="text-center mt-10 text-primary-dark text-5xl font-thin">
                    <h1>АВТОБРОНЗАНТИ</h1>
                    <p className="text-sm">За перфектен тен, без да е необходимо слънце. Постигнете естествено изглеждащ, равномерен, наситен, бронзов тен.</p>
                </div>

                <div className="mb-16 w-[80vw] m-auto">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
                        <Product
                            title='SOLIS'
                            subtitle='Self-tanning Face Serum'
                            description='Автобронзиращ серум за лице с хиалуронова киселина. За красив бронзов тен и подмладена кожа.'
                            starCount={3}
                            price={38}
                        />

                        <Product
                            title='SOLIS'
                            subtitle='Self-tanning Face Serum'
                            description='Автобронзиращ серум за лице с хиалуронова киселина. За красив бронзов тен и подмладена кожа.'
                            starCount={3}
                            price={38}
                        />

                        <Product
                            title='SOLIS'
                            subtitle='Self-tanning Face Serum'
                            description='Автобронзиращ серум за лице с хиалуронова киселина. За красив бронзов тен и подмладена кожа.'
                            starCount={3}
                            price={38}
                        />

                        <Product
                            title='SOLIS'
                            subtitle='Self-tanning Face Serum'
                            description='Автобронзиращ серум за лице с хиалуронова киселина. За красив бронзов тен и подмладена кожа.'
                            starCount={3}
                            price={38}
                        />

                        <Product
                            title='SOLIS'
                            subtitle='Self-tanning Face Serum'
                            description='Автобронзиращ серум за лице с хиалуронова киселина. За красив бронзов тен и подмладена кожа.'
                            starCount={3}
                            price={38}
                        />

                        <Product
                            title='SOLIS'
                            subtitle='Self-tanning Face Serum'
                            description='Автобронзиращ серум за лице с хиалуронова киселина. За красив бронзов тен и подмладена кожа.'
                            starCount={3}
                            price={38}
                        />

                        <div className='col-span-2 flex justify-center gap-12 sm:col-span-3'>
                            <div className='w-1/2 sm:w-1/3'>
                                <Product
                                    title='SOLIS'
                                    subtitle='Self-tanning Face Serum'
                                    description='Автобронзиращ серум за лице с хиалуронова киселина. За красив бронзов тен и подмладена кожа.'
                                    starCount={3}
                                    price={38}
                                />
                            </div>

                            <div className='w-1/2 sm:w-1/3'>
                                <Product
                                    title='SOLIS'
                                    subtitle='Self-tanning Face Serum'
                                    description='Автобронзиращ серум за лице с хиалуронова киселина. За красив бронзов тен и подмладена кожа.'
                                    starCount={3}
                                    price={38}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-12 justify-around bg-[#FBF1EB]">
                <div className="text-center mt-10 text-primary-dark text-5xl font-thin">
                    <h1>ТЕН</h1>
                    <p className="text-sm">Натурални, био масла за супер тен и сияйна кожа</p>
                </div>

                <div className="mb-16 w-[80vw] m-auto">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
                        <Product
                            title='WATERMELON'
                            subtitle='Suntan & Body Oil'
                            description='За бърз, наситен тен и сияйна кожа. С аромат на сочна диня.'
                            starCount={5}
                            price={22}
                        />

                        <Product
                            title='WATERMELON'
                            subtitle='Suntan & Body Oil'
                            description='За бърз, наситен тен и сияйна кожа. С аромат на сочна диня.'
                            starCount={5}
                            price={22}
                        />

                        <Product
                            title='WATERMELON'
                            subtitle='Suntan & Body Oil'
                            description='За бърз, наситен тен и сияйна кожа. С аромат на сочна диня.'
                            starCount={5}
                            price={22}
                        />

                        <Product
                            title='WATERMELON'
                            subtitle='Suntan & Body Oil'
                            description='За бърз, наситен тен и сияйна кожа. С аромат на сочна диня.'
                            starCount={5}
                            price={22}
                        />

                        <Product
                            title='WATERMELON'
                            subtitle='Suntan & Body Oil'
                            description='За бърз, наситен тен и сияйна кожа. С аромат на сочна диня.'
                            starCount={5}
                            price={22}
                        />

                        <Product
                            title='WATERMELON'
                            subtitle='Suntan & Body Oil'
                            description='За бърз, наситен тен и сияйна кожа. С аромат на сочна диня.'
                            starCount={5}
                            price={22}
                        />

                        <Product
                            title='WATERMELON'
                            subtitle='Suntan & Body Oil'
                            description='За бърз, наситен тен и сияйна кожа. С аромат на сочна диня.'
                            starCount={5}
                            price={22}
                        />

                        <Product
                            title='WATERMELON'
                            subtitle='Suntan & Body Oil'
                            description='За бърз, наситен тен и сияйна кожа. С аромат на сочна диня.'
                            starCount={5}
                            price={22}
                        />

                        <Product
                            title='WATERMELON'
                            subtitle='Suntan & Body Oil'
                            description='За бърз, наситен тен и сияйна кожа. С аромат на сочна диня.'
                            starCount={5}
                            price={22}
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-12 justify-around bg-white">
                <div className="text-center mt-10 text-primary-dark text-5xl font-thin">
                    <h1>БЛЯСЪК</h1>
                    <p className="text-sm">Натурални продукти за елегантен блясък и грижа за кожата</p>
                </div>

                <div className="mb-16 w-[80vw] m-auto">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
                        <Product
                            title='AURA'
                            subtitle='Peptide Shimmer Spray'
                            description='Натурален блестящ спрей с пептиди за лице, тяло и коса. Озарява, хидратира и подмладява.'
                            starCount={4}
                            price={60}
                        />

                        <Product
                            title='AURA'
                            subtitle='Peptide Shimmer Spray'
                            description='Натурален блестящ спрей с пептиди за лице, тяло и коса. Озарява, хидратира и подмладява.'
                            starCount={4}
                            price={60}
                        />

                        <Product
                            title='AURA'
                            subtitle='Peptide Shimmer Spray'
                            description='Натурален блестящ спрей с пептиди за лице, тяло и коса. Озарява, хидратира и подмладява.'
                            starCount={4}
                            price={60}
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-12 justify-around bg-[#FBF1EB]">
                <div className="text-center mt-10 text-primary-dark text-5xl font-thin">
                    <h1>SPF</h1>
                    <p className="text-sm">Натурални, био слънцезащитни лосиони</p>
                </div>

                <div className="mb-16 w-[80vw] m-auto">
                    <div className="flex flex-row gap-4 justify-center">
                        <div className='w-1/2 sm:w-1/3'>
                            <Product
                                title='SPF30'
                                subtitle='Natural Sunscreen Lotion'
                                description='Натурален слънцезащитен лосион. Предпазва от UVA & UVB лъчи.'
                                starCount={5}
                                price={45}
                            />
                        </div>
                        <div className='w-1/2 sm:w-1/3'>
                            <Product
                                title='SPF30'
                                subtitle='Natural Sunscreen Lotion'
                                description='Натурален слънцезащитен лосион. Предпазва от UVA & UVB лъчи.'
                                starCount={5}
                                price={45}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-row">
                <div className="bg-[#f2d3c1] flex flex-col gap-8 p-8">
                    <div className="flex flex-row gap-4">
                        <div>
                            <Icon url='https://cocosolis.com/wp-content/uploads/icon-leaf-regular-white.svg' />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-primary-dark text-2xl">Натурални и Био</h3>
                            <p className="text-primary-dark text-base font-extralight text-start">Продуктите на COCOSОLIS са винаги натурални и създадени само с най-висококачествени био, студено пресовани масла.</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4">
                        <div>
                            <Icon url='https://cocosolis.com/wp-content/uploads/icon-heart-solid-white.svg' />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-primary-dark text-2xl">Създадени с любов</h3>
                            <p className="text-primary-dark text-base font-extralight text-start">Създадени с любов и уважение към хората и природата. Нежни към кожата. Притежаващи аромат, в който ще се влюбите</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4">
                        <div>
                            <Icon url='https://cocosolis.com/wp-content/uploads/icon-paw-solid-white.svg' />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-primary-dark text-2xl">С отношение</h3>
                            <p className="text-primary-dark text-base font-extralight text-start">Без наличие на парабени, оцветители, минерални и синтетични масла и разбира се, без тестване върху животни.</p>
                        </div>
                    </div>
                </div>

                <img className='hidden w-auto h-auto max-h-[500px] max-w-[640px] lg:block' width='640' height='500' src="https://placehold.co/640x500" />
            </section>

            <section className="bg-primary-dark text-white">
                <div className="m-auto py-12 w-[80vw] flex flex-col gap-4">
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

            </section>

            <section className='w-[80vw] m-auto flex flex-col gap-12 items-start bg-white'>
                <div className="text-left mt-10 text-primary-dark text-5xl font-thin">
                    <h1 className='text-4xl font-light'>ПОТРЕБИТЕЛСКИ ОТЗИВИ</h1>
                    <p className="text-base">18 801 мнения, от които 2 371 от български клиенти</p>
                </div>

                <Comment
                    name='Даниела Д.'
                    date='08.07.2024'
                    title='Cocosolis'
                    text='Копринено нежни масла за кожата. Ароматите са превъзходни.'
                    starCount={4}
                />

                <Comment
                    name='Даниела Д.'
                    date='08.07.2024'
                    title='Cocosolis'
                    text='Копринено нежни масла за кожата. Ароматите са превъзходни.'
                    starCount={4}
                />

                <Comment
                    name='Даниела Д.'
                    date='08.07.2024'
                    title='Cocosolis'
                    text='Копринено нежни масла за кожата. Ароматите са превъзходни.'
                    starCount={4}
                />

                <Comment
                    name='Даниела Д.'
                    date='08.07.2024'
                    title='Cocosolis'
                    text='Копринено нежни масла за кожата. Ароматите са превъзходни.'
                    starCount={4}
                />

                <div className="m-auto mb-12 flex flex-row justify-center gap-2 text-primary-dark font-bold">
                    <p className="font-bold">&lt;</p>
                    {[...Array(9).keys()].map((v, i, arr) => (<p>{i + 1}</p>))}
                    <p className="font-bold">&gt;</p>
                </div>
            </section>

            <section className='bg-[#2bb1ff] flex flex-row gap-8 justify-center w-full items-center'>
                <img width='160' src='https://cocosolis.com/wp-content/uploads/SOS_logo-BG.svg'></img>
                <img className='hidden sm:block' width='160' src='https://cocosolis.com/wp-content/uploads/cocosolis-sos-gold-partners-2023.svg'></img>
                <div className="text-white">COCOSOLIS дарява по 1лв. от всеки закупен продукт на SOS детски селища.</div>
            </section>
        </main>
    )
}

export default Main