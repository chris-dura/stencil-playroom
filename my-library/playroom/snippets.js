import dedent from 'dedent';

export default [
  {
    group: 'Layout',
    name: 'Grid',
    code: dedent`
      <div class="ml-grid">
        <div class="ml-cell">Full column</div>
      </div>
    `,
  },
  {
    group: 'Typography',
    name: 'Blockquote',
    code: dedent`
      <blockquote>
        <p>Hello, 1925. How do you know that's the truth? A <em>new</em> idea is something they don't know yet, so of course it's not going to come up as an option.</p>
        <p>You can't tell how people are <em>going</em> to behave based on how they <em>have</em> behaved.</p>
        <footer class="kite-blockquote--footer">Don Draper, addressing a focus group moderator in <cite title="Mad Men">Mad Men</cite></footer>
      </blockquote>
    `,
  },
];
