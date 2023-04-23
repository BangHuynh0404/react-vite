/* eslint-disable no-undef */
module.exports = (plop) => {
  // COMPONENT GENERATOR
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Type of component?',
        choices: () => ['atoms', 'molecules', 'organisms', 'templates'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
    ],

    actions() {
      const actions = [];

      actions.push(
        {
          type: 'add',
          path: 'src/components/{{type}}/{{pascalCase name}}/index.tsx',
          templateFile: 'src/plop-templates/component/index.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{type}}/{{pascalCase name}}/index.scss',
          templateFile: 'src/plop-templates/component/index.scss.hbs',
        },
        {
          type: 'append',
          path: 'src/styles/{{type}}.scss',
          template: "@import '../components/{{type}}/{{pascalCase name}}/index.scss';",
        }
        // {
        //   type: 'add',
        //   path: 'src/components/{{type}}/{{pascalCase name}}/index.stories.tsx',
        //   templateFile: 'src/plop-templates/component/index.stories.tsx.hbs',
        // },
      );

      return actions;
    },
  });

  // CONTAINER & PAGE
  plop.setGenerator('Container', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Container name?',
      },
    ],
    actions() {
      const actions = [];

      actions.push(
        {
          type: 'add',
          path: 'src/containers/{{pascalCase name}}/index.tsx',
          templateFile: 'src/plop-templates/container/index.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/containers/{{pascalCase name}}/index.scss',
          templateFile: 'src/plop-templates/container/index.scss.hbs',
        }
      );
      return actions;
    },
  });

  plop.setGenerator('Page', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Pages name?',
      },
    ],
  });

  plop.setGenerator('Append', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'Append',
        message: 'Append what?',
      },
    ],
    actions() {
      const actions = [];

      actions.push({
        type: 'append',
        path: 'src/App.scss',
        pattern: '//aaa',
        template: "@import './components/{{pascalCase name}}/index.scss';",
      });
      return actions;
    },
  });

  plop.setHelper('classNameComponent', (type) => {
    if (type === 'atoms') {
      return 'a-';
    }
    if (type === 'molecules') {
      return 'm-';
    }
    if (type === 'organisms') {
      return 'o-';
    }
    if (type === 'templates') {
      return 't-';
    }
    return '';
  });
};
