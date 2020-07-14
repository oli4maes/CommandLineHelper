using CommandLineHelper.Models;
using System.Linq;
using System.Collections.Generic;
using System;

namespace CommandLineHelper.Data
{
    public class CommandLineHelperRepo : ICommandLineHelperRepo
    {
        private readonly CommandLineHelperContext _context;

        public CommandLineHelperRepo(CommandLineHelperContext context)
        {
            _context = context;
        }
        
        public IEnumerable<Command> GetAllCommands() 
        {
            return _context.Commands;  
        }

        public Command GetCommandById(int id)
        {
            return _context.Commands.FirstOrDefault(c => c.Id == id);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void CreateCommand(Command cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }

            _context.Commands.Add(cmd);
        }

        public void UpdateCommand(Command cmd)
        {
            // Nothing
        }

        public void DeleteCommand(Command cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }

            _context.Commands.Remove(cmd);
        }

    }
}