<template>
    <div class="need-share">
        Если проект покажется вам полезным, помогите его распространить:
        <ol>
            <li>
                Поделитесь ссылкой
                <code>PddDiff.vercel.app</code> в ваших соцсетях или в личных сообщениях.
                <br />
                <button
                    class="btn"
                    onclick="javascript:navigator.share({url: 'https://pdddiff.vercel.app'})"
                >Поделиться</button>
            </li>
            <li>
                Поставьте нам звезду на GitHub
                <br />
                <a
                    class="btn"
                    href="https://github.com/rizhenkov/pdd-diff-by-pl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        class="octicon octicon-star"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                        />
                    </svg>
                    Star
                </a>
            </li>
            <li>Если вы в Польше — свяжитесь с администратором местного чата в вашем городе и попросите добавить ссылку на наш проект в подборки ссылок для адаптации приезжающих.</li>
        </ol>
    </div>

    <div class="tgch">
        О существенных дополнениях и изменениях в этом гайде мы сообщаем в Telegram:
        <div class="tgname">
            <a target="_blank" href="https://t.me/pdddiff">@pdddiff</a>
        </div>
        <a
            class="btn-tg"
            href="https://t.me/pdddiff"
            target="_blank"
            rel="noopener noreferrer"
        >Открыть в Telegram</a>
    </div>
</template>

<style lang="scss" scoped>
.tgch {
    max-width: 550px;
    margin: 0 auto;
    position: relative;
    border-radius: 0.5rem;
    padding: 2rem;
    background-color: #ecf3f7;
    color: #1b2e3a;
    text-align: center;

    box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
    border-radius: 16px;
}

.tgname {
    margin: 0.5rem 0 0.875rem;
    font-size: 1rem;
    font-weight: bold;
    color: #1b2e3a;

    a {
        color: #1c93e3;
    }
}

.btn-tg {
    font-size: 14px;
    line-height: 17px;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    background: #5dc390;
    border-radius: 22px;
    overflow: hidden;
    display: inline-block;
    padding: 13px 24px;
    height: 42px;
    text-transform: uppercase;
    vertical-align: top;
    background: #1c93e3;
    background-image: linear-gradient(
        270deg,
        rgba(100, 181, 239, 0) 48.44%,
        #64b5ef 75.52%,
        rgba(100, 181, 239, 0) 100%
    );
    background-repeat: no-repeat;
    animation: bg-move linear 5s infinite;

    &:hover,
    &:active {
        color: #fff;
        text-decoration: none;
        background: #1a8ad5;
    }
}

@-webkit-keyframes bg-move {
    0% {
        background-position: -500px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}
@keyframes bg-move {
    0% {
        background-position: -500px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}

.need-share {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background: #fafafa;
    font-size: 0.875rem;
    margin-bottom: 2rem;
}

ol {
    margin-bottom: 0;
    li:not(:last-child) {
        margin-bottom: 0.5rem;
    }
}

.btn {
    white-space: nowrap;
    font-weight: 700;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: inline-flex;

    svg {
        margin-right: 0.25rem;
    }

    border: 1px solid;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 16px;
    border-radius: 0.25em;
    color: #24292f;
    background-color: #ebf0f4;
    border-color: #ccd1d5;
    border-color: rgba(27, 31, 36, 0.15);
    background-image: -moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);
    background-image: linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);

    &:hover {
        text-decoration: none;
        background-color: #e6ebf1;
        border-color: #dae1e7;
        border-color: rgba(27, 31, 36, 0.35);
        background-image: -moz-linear-gradient(top, #f1f3f6, #e6ebf1 90%);
        background-image: linear-gradient(180deg, #f1f3f6, #e6ebf1 90%);
    }

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &:active {
        background-color: #e9ecef;
        border-color: #dee2e6;
        background-image: -moz-linear-gradient(top, #e3e5e7, #f6f8fa 90%);
        background-image: linear-gradient(180deg, #e3e5e7, #f6f8fa 90%);
    }
}
</style>